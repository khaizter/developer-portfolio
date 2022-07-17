import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import {
  StyledFilter,
  FilterItem,
  DropdownFilter,
  DropdownOpener,
  DropdownList,
  DropdownItem,
} from "./Filter.element";

import ChevronDownIcon from "../../../../assets/svg/chevron-down.svg";
import ChevronUpIcon from "../../../../assets/svg/chevron-up.svg";

const listVariants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const openerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const dropDownListVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "max-content",
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const dropDownListItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
      <StyledFilter variants={listVariants}>
        <FilterItem
          active={(currentFilter === "all").toString()}
          variants={listItemVariants}
        >
          <button onClick={filterAllHandler}>All</button>
        </FilterItem>
        <FilterItem
          active={(currentFilter === "front-end").toString()}
          variants={listItemVariants}
        >
          <button onClick={filterFrontEndHandler}>Front-End</button>
        </FilterItem>
        <FilterItem
          active={(currentFilter === "back-end").toString()}
          variants={listItemVariants}
        >
          <button onClick={filterBackEndHandler}>Back-End</button>
        </FilterItem>
        <FilterItem
          active={(currentFilter === "others").toString()}
          variants={listItemVariants}
        >
          <button onClick={filterOthersHandler}>Others</button>
        </FilterItem>
      </StyledFilter>
      <DropdownFilter>
        <DropdownOpener
          onClick={() => setShowDropdown((prevState) => !prevState)}
          variants={openerVariants}
        >
          {currentFilter}
          <img
            src={showDropdown ? ChevronUpIcon : ChevronDownIcon}
            alt="Dropdown opener"
          />
        </DropdownOpener>
        <AnimatePresence>
          {showDropdown && (
            <DropdownList
              variants={dropDownListVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <DropdownItem variants={dropDownListItemVariants}>
                <button onClick={filterAllHandler}>All</button>
              </DropdownItem>
              <DropdownItem variants={dropDownListItemVariants}>
                <button onClick={filterFrontEndHandler}>Front-End</button>
              </DropdownItem>
              <DropdownItem variants={dropDownListItemVariants}>
                <button onClick={filterBackEndHandler}>Back-End</button>
              </DropdownItem>
              <DropdownItem variants={dropDownListItemVariants}>
                <button onClick={filterOthersHandler}>Others</button>
              </DropdownItem>
            </DropdownList>
          )}
        </AnimatePresence>
      </DropdownFilter>
    </>
  );
};

export default Filter;
