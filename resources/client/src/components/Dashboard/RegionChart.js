import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

const RegionBubbleChart = ({ data }) => {
  const regionCounts = {};
  data.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const regions = Object.keys(regionCounts);
  const regionData = regions.map(region => ({
    x: Math.random() * 100,
    y: regionCounts[region],
    r: Math.random() * 30 + 5, // Bubble radius between 5 and 35
  }));

  const chartData = {
    labels: regions,
    datasets: [
      {
        label: 'Regions',
        data: regionData,
        backgroundColor: regions.map((_, index) => {
          const colors = [
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
          ];
          return colors[index % colors.length];
        }),
        hoverBackgroundColor: regions.map((_, index) => {
          const hoverColors = [
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
          ];
          return hoverColors[index % hoverColors.length];
        }),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Random Value (x-axis)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Region Counts (y-axis)',
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 5,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box
      borderRadius={20}
      p={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      bg={useColorModeValue("white", "gray.800")}
      width="100%" // Full viewport width
      height="auto" // 70% of viewport height
      overflow="hidden"
      mx="auto"
    >
      <Heading as="h2" mb={4} ml={6}>
        Region Bubble Chart
      </Heading>

      <Box height="100%">
        <Bubble data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default RegionBubbleChart;
