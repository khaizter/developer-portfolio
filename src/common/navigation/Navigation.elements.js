import styled from "styled-components";
import Device from "../../globals/Devices";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  display: none;

  @media ${Device.laptop} {
    display: block;
  }
`;

export const List = styled(motion.ul)`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled(motion.li)`
  a {
    color: inherit;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    text-decoration: none;
    &:hover,
    &:active {
      color: ${(props) => props.theme.accent};
    }
  }
`;

export const ListItemResume = styled(ListItem)`
  a {
    border: 1px solid ${(props) => props.theme.white};
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.accent};
    &:hover {
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme.primary};
    }
  }
`;
