import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Heading } from '@chakra-ui/react';

const IntensityChart = ({ data }) => {
  const intensityData = data.map(item => item.intensity);
  const years = data.map(item => item.start_year);

  const getColor = (value) => {
    const colors = [
      '#1f77b4', // Blue
      '#ff7f0e', // Orange
      '#2ca02c', // Green
      '#d62728', // Red
    ];
    const threshold = Math.max(...intensityData) / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Intensity',
        backgroundColor: 'rgba(31, 119, 180, 0.2)',
        borderColor: intensityData.map((value) => getColor(value)),
        borderWidth: 2,
        pointBackgroundColor: intensityData.map((value) => getColor(value)),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: intensityData.map((value) => getColor(value)),
        data: intensityData,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
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
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        offset: -10,
        font: {
          size: 14,
          weight: 'bold',
        },
        formatter: (value) => value + '%',
        shadowBlur: 10,
        shadowColor: 'white',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
          },
          callback: (value) => value + '%',
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart', // Use a smooth easing function
      mode: 'progressive',
    },
  };

  return (
    <div style={{ margin: '50px 10px 20px 5px', padding: '20px', width: '100%', height: '100%', fontFamily: 'Arial, sans-serif', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Heading as="h2" mb={4}>Intensity Chart</Heading>
      <Line data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default IntensityChart;
