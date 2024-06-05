import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const TopicsBarChart = ({ data }) => {
  console.log('saSAS',data);
  const topics = data.map(item => item.topic);
  const relevanceValues = data.map(item => item.relevance);

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
  };

  const chartData = {
    labels: topics,
    datasets: [
      {
        label: 'Relevance',
        data: relevanceValues,
        backgroundColor: Array.from({ length: topics.length }, () => randomColor()),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Topics Bar Chart
      </Heading>
      <Bar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsBarChart;
