import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import AdminDashboard from "./Sidebar";
import { ChakraProvider, Flex, Box, Grid, Heading } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";
import Footer from "./Footer";
import CityChart from "./CityChart";
import YearChart from "./YearChart";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "";
      try {
        const response = await axios.get(`${API_URL}/data`);
        console.log('ctgtgg',response.data);
        setData(response.data);
        setFilteredData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider>
      <Navbar data={data} setFilteredData={setFilteredData}/>
      <AdminDashboard />
      <IntensityChart data={filteredData} />
    
        <Box>
          <LikelihoodRadarChart data={filteredData} />
        </Box>
        <Box>
      <RelevanceBubbleChart data={filteredData} />
      </Box>
        <Box>
          <Heading as="h2" mb={4}>Year Chart</Heading>
          <YearChart  data={filteredData} />
        </Box>
        <Box>
      <CountryChart data={filteredData} />
      </Box>
        <Box
          maxW="100%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
          display="block"
          maxH='100%'
        >
          <TopicsRadarChart data={filteredData} />
        </Box>
        <Box
          maxW="100%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
          display="block"
          maxH='100%'
        >
          <RegionChart data={filteredData} />
        </Box>
        <Box>
          <PieChart data={filteredData} />
        </Box>
        <Box>
          <Heading as="h2" mb={4}>City Chart</Heading>
          {/* {console.log('dd',filteredData)} */}
          <CityChart data={filteredData} />
        </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default Main;
