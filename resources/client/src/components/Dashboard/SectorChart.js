import React from "react";
import { Radar } from "react-chartjs-2";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const RadarChart = ({ data }) => {
  const sectors = {};

  data.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4CAF50",
      "#FF9800",
      "#9C27B0",
      "#3F51B5",
      "#E91E63",
      "#00BCD4",
      "#8BC34A",
      // Add more colors if needed
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        label: "Intensity",
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
        borderWidth: 1,
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
          color: useColorModeValue("gray.200", "gray.700"),
        },
        grid: {
          color: useColorModeValue("gray.200", "gray.700"),
        },
        pointLabels: {
          color: useColorModeValue("gray.800", "gray.200"),
          font: {
            size: 14,
          },
        },
        ticks: {
          backdropColor: useColorModeValue("white", "gray.800"),
        },
      },
    },
    plugins: {
      tooltip: {
        position: "average",
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          color: useColorModeValue("gray.800", "gray.200"),
        },
      },
    },
  };

  return (
    <Box
      p={6}
      borderRadius={20}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700}
      overflow="hidden"
      mx="auto"
      height='100%'
      // maxW='100%'
    >
      <Heading as="h2" mb={4} textAlign="center">
        Sector Intensity Radar Chart
      </Heading>

      <Box height="100%">
        <Radar data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default RadarChart;
