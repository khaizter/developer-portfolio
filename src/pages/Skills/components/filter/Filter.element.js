import styled from "styled-components";

export const StyledFilter = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;
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
