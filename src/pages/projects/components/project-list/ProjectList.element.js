import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledProjectList = styled(motion.ul)`
  display: grid;
  justify-content: center;
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(18.0625rem, 1fr));
`;
