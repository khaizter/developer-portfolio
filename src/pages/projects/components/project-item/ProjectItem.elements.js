import styled from "styled-components";

import { motion } from "framer-motion";

export const StyledProjectItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  /* box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); */
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  &:hover > div > img {
    transform: scale(1.1);
  }
`;

export const DisplayImage = styled.div`
  background-color: hsl(0, 0%, 98%);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  overflow: hidden;
  img {
    transition: transform 0.2s ease-in-out;
    mix-blend-mode: darken;
    display: block;
    width: 100%;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.secondaryText};
`;

export const Actions = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Link = styled.a`
  border: none;
  background: none;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  img {
    display: block;
    aspect-ratio: 1/1;
    width: 2rem;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    background: hsl(0, 0%, 97%);
    img {
      transform: scale(1.1);
    }
  }
`;
