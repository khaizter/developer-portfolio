import React, { useState } from "react";

import { StyledFilter, FilterItem } from "./Filter.element";

const Filter = ({ setFilter }) => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const filterAllHandler = () => {
    setCurrentFilter("all");
    setFilter("all");
  };

  const filterFrontEndHandler = () => {
    setCurrentFilter("front-end");
    setFilter("front-end");
  };

  const filterBackEndHandler = () => {
    setCurrentFilter("back-end");
    setFilter("back-end");
  };

  const filterOthersHandler = () => {
    setCurrentFilter("others");
    setFilter("others");
  };

  return (
    <StyledFilter>
      <FilterItem active={currentFilter === "all"}>
        <button onClick={filterAllHandler}>All</button>
      </FilterItem>
      <FilterItem active={currentFilter === "front-end"}>
        <button onClick={filterFrontEndHandler}>Front-End</button>
      </FilterItem>
      <FilterItem active={currentFilter === "back-end"}>
        <button onClick={filterBackEndHandler}>Back-End</button>
      </FilterItem>
      <FilterItem active={currentFilter === "others"}>
        <button onClick={filterOthersHandler}>Others</button>
      </FilterItem>
    </StyledFilter>
  );
};

export default Filter;
