// src/components/Dashboard/Filters.jsx

import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <FormControl>
      <FormLabel>Filters</FormLabel>
      <Select name="end_year" value={filters.end_year} onChange={handleFilterChange}>
        {/* Options for end_year */}
      </Select>
      <Select name="topic" value={filters.topic} onChange={handleFilterChange}>
        {/* Options for topic */}
      </Select>
      {/* Add more Select components for other filter fields */}
    </FormControl>
  );
};

export default Filters;
