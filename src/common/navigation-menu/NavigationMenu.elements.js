import styled from "styled-components";
import Device from "../../globals/Devices";
import { motion } from "framer-motion";

export const StyledNavigationMenu = styled.div`
  display: block;
  @media ${Device.laptop} {
    display: none;
  }
`;

export const Hamburger = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Nav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  padding-block: 1.25rem;
  padding-inline: 2rem;
  height: 100vh;
  background-color: white;
  font-size: 2.25rem;
`;

export const Close = styled(motion.button)`
  display: block;
  align-self: flex-end;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  img {
    width: 4rem;
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const List = styled(motion.ul)`
  align-self: stretch;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItem = styled(motion.li)`
  font-size: 2.25rem;
  position: relative;
  a {
    text-decoration: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 3px;
    height: 4px;
    width: 0rem;
    transition: width 0.2s ease-in-out;
    background-color: black;
  }
  &:hover {
    &::after {
      width: 3.5rem;
    }
  }
`;

export const ResumeLink = styled(motion.a)`
  display: block;
  border: 2px solid black;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
  }
`;
