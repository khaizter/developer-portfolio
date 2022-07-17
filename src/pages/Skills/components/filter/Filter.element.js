import styled from "styled-components";
import Device from "../../../../globals/Devices";

export const StyledFilter = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;

  @media ${Device.tabletS} {
    display: flex;
    gap: 2rem;
  }
`;

export const FilterItem = styled.li`
  button {
    border: none;
    background: none;
    font-size: 1.5rem;
    color: ${(props) => (props.active ? props.theme.accent : "inherit")};
    cursor: pointer;
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

export const DropdownOpener = styled.button`
  text-align: left;
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  min-width: 10ch;
  text-transform: capitalize;
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 2;
  top: calc(100% + 0.5rem);
  left: 0;
  background-color: gray;
  font-size: 1.5rem;
  min-width: 10ch;
`;

export const DropdownItem = styled(FilterItem)`
  button {
    text-align: left;
    padding: 0.25rem 0.5rem;
    width: 100%;
  }
`;
