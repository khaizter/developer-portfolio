import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSkillItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  :hover p {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  background-color: white;
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 50%;
  width: 100%;
  padding: 1rem;
  position: relative;
  &::after {
    content: "";
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(0);
    z-index: 0;
    transition: transform 0.2s ease-out;
  }

  &:hover::after {
    transform: translate(0, 0) rotate(45deg);
  }
`;

export const Icon = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
`;

export const HoverText = styled.p`
  position: absolute;
  z-index: 5;
  top: 80%;
  right: 0;
  transform: translateX(50%);
  opacity: 0;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  background-color: black;
  color: white;
  border-radius: 8px;
`;
