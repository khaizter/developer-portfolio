import styled from "styled-components";
import Device from "../../../../globals/Devices";

import { motion } from "framer-motion";

export const StyledFilter = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;

  @media ${Device.tabletS} {
    display: flex;
    gap: 2rem;
  }
`;

export const FilterItem = styled(motion.li)`
  button {
    border: none;
    background: none;
    font-size: 1.5rem;
    color: ${(props) =>
      props.active === "true" ? props.theme.accent : "inherit"};
    cursor: pointer;

    &:hover,
    &:active {
      color: ${(props) => props.theme.accent};
    }
  }
`;

export const DropdownFilter = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${Device.tabletS} {
    display: none;
  }
`;

export const DropdownOpener = styled(motion.button)`
  background: none;
  border: none;
  border-bottom: 2px solid hsl(0, 0%, 70%);
  text-align: left;
  padding-block: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0;
  font-size: 1.5rem;
  min-width: 11ch;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: block;
  }
`;

export const DropdownList = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 2;
  top: calc(100% + 0.5rem);
  left: 0;
  background-color: white;
  border-radius: 4px;
  font-size: 1.5rem;
  min-width: 11ch;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const DropdownItem = styled(FilterItem)`
  button {
    text-align: left;
    padding: 0.25rem 0.5rem;
    width: 100%;
  }
`;
