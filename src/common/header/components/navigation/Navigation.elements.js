import styled from "styled-components";

export const Nav = styled.nav`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  a {
    color: ${(props) => (props.active ? props.theme.accent : "inherit")};
    text-decoration: none;
  }
`;
