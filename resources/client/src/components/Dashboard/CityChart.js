import React from 'react';
import { Bar } from 'react-chartjs-2';

const CityChart = ({ data }) => {
  // Function to count occurrences of each city
  console.log('czca',data);
  const countCities = () => {
    const cityCounts = {};
    data.forEach((item) => {
      if (item.city) {
        if (!cityCounts[item.city]) {
          cityCounts[item.city] = 1;
        } else {
          cityCounts[item.city]++;
        }
      }
    });
    return cityCounts;
  };

  const cityData = countCities();
  const cityLabels = Object.keys(cityData);
  const cityValues = Object.values(cityData);

  const chartData = {
    labels: cityLabels,
    datasets: [
      {
        label: 'Occurrences',
        data: cityValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
        
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

  return <Bar data={chartData} options={chartOptions} />;
};

export default CityChart;
