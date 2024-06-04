import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

const PolarAreaChart = ({ data }) => {
  const relevanceData = data.map(item => item.relevance);
  const categories = data.map(item => item.sector); // Assuming each item has a 'sector' field

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Relevance',
        data: relevanceData,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
          '#E91E63',
          '#00BCD4',
          '#8BC34A',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
          '#E91E63',
          '#00BCD4',
          '#8BC34A',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          color: useColorModeValue('gray.200', 'gray.700'),
        },
        grid: {
          color: useColorModeValue('gray.200', 'gray.700'),
        },
        pointLabels: {
          color: useColorModeValue('gray.800', 'gray.200'),
          font: {
            size: 14,
          },
        },
        ticks: {
          backdropColor: useColorModeValue('white', 'gray.800'),
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          color: useColorModeValue('gray.800', 'gray.200'),
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 5,
      },
    },
  };

  return (
    <Box
      margin={50}
      p={4}
      mt={8}
      borderRadius={18}
      boxShadow='0px 0px 10px rgba(0, 0, 0, 0.1)'
      bg={useColorModeValue("white", "gray.800")}
      width="100vw" // Full viewport width
      height="70vh" // 70% of viewport height
      overflow="hidden"
      mx="auto"
    >
      <Heading as="h2" mb={4} ml={6}>
        Relevance Polar Area Chart
      </Heading>

      <Box height="100%">
        <PolarArea data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default PolarAreaChart;
