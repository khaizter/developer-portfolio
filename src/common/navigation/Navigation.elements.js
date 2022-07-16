import styled from "styled-components";
import Device from "../../globals/Devices";

export const Nav = styled.nav`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  display: none;

  @media ${Device.laptop} {
    display: block;
  }
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
    /* color: ${(props) => (props.active ? props.theme.accent : "inherit")}; */
    color: ${(props) => (props.resume ? props.theme.accent : "inherit")};
    text-decoration: none;
    &:hover,
    &:active {
      color: ${(props) => props.theme.accent};
    }

    ${(props) =>
      props.resume ? "border: 1px solid white;padding: 0.5rem 1rem;" : ""};
  }

  button {
  }
`;