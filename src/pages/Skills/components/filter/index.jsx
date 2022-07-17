import React, { useState } from "react";

import {
  StyledFilter,
  FilterItem,
  DropdownFilter,
  DropdownOpener,
  DropdownList,
  DropdownItem,
} from "./Filter.element";

const Filter = ({ setFilter }) => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const [showDropdown, setShowDropdown] = useState(false);

  const filterAllHandler = () => {
    setShowDropdown(false);
    setCurrentFilter("all");
    setFilter("all");
  };

  const filterFrontEndHandler = () => {
    setShowDropdown(false);
    setCurrentFilter("front-end");
    setFilter("front-end");
  };

  const filterBackEndHandler = () => {
    setShowDropdown(false);
    setCurrentFilter("back-end");
    setFilter("back-end");
  };

  const filterOthersHandler = () => {
    setShowDropdown(false);
    setCurrentFilter("others");
    setFilter("others");
  };

  return (
    <>
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
      <DropdownFilter>
        <DropdownOpener
          onClick={() => setShowDropdown((prevState) => !prevState)}
        >
          {currentFilter}
        </DropdownOpener>
        {showDropdown && (
          <DropdownList>
            <DropdownItem>
              <button onClick={filterAllHandler}>All</button>
            </DropdownItem>
            <DropdownItem>
              <button onClick={filterFrontEndHandler}>Front-End</button>
            </DropdownItem>
            <DropdownItem>
              <button onClick={filterBackEndHandler}>Back-End</button>
            </DropdownItem>
            <DropdownItem>
              <button onClick={filterOthersHandler}>Others</button>
            </DropdownItem>
          </DropdownList>
        )}
      </DropdownFilter>
    </>
  );
};

export default Filter;
