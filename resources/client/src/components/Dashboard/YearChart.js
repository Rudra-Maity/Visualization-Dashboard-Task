import { Box } from '@chakra-ui/react';
import React from 'react';
import { Line } from 'react-chartjs-2';

const YearChart = ({ data }) => {
  // Function to count occurrences of events each year
  const countYears = () => {
    const yearCounts = {};
    data.forEach((item) => {
      const year = item.start_year;
      if (!yearCounts[year]) {
        yearCounts[year] = 1;
      } else {
        yearCounts[year]++;
      }
    });
    return yearCounts;
  };

  const yearData = countYears();
  const yearLabels = Object.keys(yearData);
  const yearValues = Object.values(yearData);

  const chartData = {
    labels: yearLabels,
    datasets: [
      {
        label: 'Occurrences',
        data: yearValues,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.6)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return(
   <Line style={{ 
    margin :'10px',
    width: '100vw'
   }} data={chartData} options={chartOptions} />
 
   );
};

export default YearChart;
