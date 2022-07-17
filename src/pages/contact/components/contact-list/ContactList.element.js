import styled from "styled-components";

import { motion } from "framer-motion";

export const StyledContactList = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;
