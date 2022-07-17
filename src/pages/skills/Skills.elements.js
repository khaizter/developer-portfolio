import styled from "styled-components";
import Device from "../../globals/Devices";

import { motion } from "framer-motion";

export const StyledSkills = styled.section`
  background-color: ${(props) => props.theme.white};
  background-color: #fcfcfc;
  min-height: calc(100vh - 6.25rem);
`;

export const FlexContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-block: 4rem;
  @media ${Device.tablet} {
    padding-block: 6.25rem;
  }
`;

export const Title = styled(motion.h1)`
  color: ${(props) => props.theme.primaryText};
  font-size: clamp(2.5rem, 1rem + 2vw, 3rem);
`;
