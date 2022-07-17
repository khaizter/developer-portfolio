import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.primary};
`;

export const FlexContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.75rem;
`;

export const Brand = styled(motion.a)`
  display: block;
  font-family: "Josefin Sans", sans-serif;
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);
`;

export const SymbolLeft = styled(motion.span)`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.white};
  margin-right: 0.75rem;
`;
export const SymbolRight = styled(motion.span)`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.white};
  margin-left: 0.75rem;
`;
