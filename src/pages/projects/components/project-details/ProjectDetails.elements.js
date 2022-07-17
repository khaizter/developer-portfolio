import styled from "styled-components";
import Device from "../../../../globals/Devices";

import { motion } from "framer-motion";

export const StyledProjectDetails = styled(motion.div)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  max-height: calc(100vh - 4rem);
  /* overflow-y: scroll; */

  /* height: 80vh; */
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  gap: 0;
  /* padding-block: 2rem; */

  @media ${Device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 55%;
    gap: 2rem;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  img {
    display: block;
    width: 100%;
  }

  @media ${Device.tablet} {
    width: 45%;
  }
`;

export const Display = styled.div`
  position: relative;
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
`;

export const NextSlider = styled.button`
  display: block;
  color: white;
  background: none;

  padding-inline: 1rem;
  border: none;
  margin: 0;
  position: absolute;
  height: 100%;
  width: auto;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 1;
  }
  @media ${Device.tablet} {
    opacity: 0;
    background-image: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 0.548)
    );
  }
`;

export const PrevSlider = styled.button`
  display: block;
  color: white;
  background: none;
  padding-inline: 1rem;
  border: none;
  margin: 0;
  position: absolute;
  height: 100%;
  width: auto;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 1;
  }
  @media ${Device.tablet} {
    opacity: 0;
    background-image: linear-gradient(
      to left,
      transparent,
      rgba(0, 0, 0, 0.548)
    );
  }
`;

export const Thumbnails = styled.div`
  justify-content: center;
  gap: 2.5rem;
  display: none;
  @media ${Device.tablet} {
    display: flex;
  }
`;

export const ThumbnailItem = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid
    ${(props) => (props.active ? props.theme.accent : "transparent")};
  background-color: ${(props) =>
    props.active ? "hsla(0, 0%, 100%, 0.4)" : "transparent"};

  &:hover {
    border: 2px solid ${(props) => props.theme.accent};
    background-color: hsla(0, 0%, 100%, 0.4);
  }
  img {
    ${(props) => (props.active ? "mix-blend-mode: lighten;" : "")};
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      mix-blend-mode: lighten;
    }
  }
`;

export const Content = styled(motion.div)`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-rows: max-content max-content max-content 1fr max-content;
  min-height: 0;
  background-color: white;
  padding: 2rem;
  width: 100%;
  position: relative;

  @media ${Device.tablet} {
    width: 45%;
    max-height: 32rem;
  }
`;

export const Close = styled(motion.button)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  img {
    display: block;
    transition: transform 0.2s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const Title = styled(motion.h1)``;

export const Technologies = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
`;

export const TechnologyItem = styled.li`
  border: 1px solid black;
  padding: 0.25rem;
  border-radius: 4px;
  position: relative;
  img {
    display: block;
    width: 1.5rem;
  }
  p {
    background-color: black;
    color: white;
    opacity: 0;
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    padding-block: 0.12rem;
    padding-inline: 0.25rem;
    border-radius: 4px;
    font-size: 0.75rem;
  }
  &:hover p {
    opacity: 1;
  }
`;

export const ScrollableDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  color: ${(props) => props.theme.secondaryText};
`;

export const About = styled.p``;

export const List = styled.ul`
  margin: 0;
  li {
  }
`;

export const Actions = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  border: 1px solid black;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  transition: all 0.2s ease-out;
  span {
    vertical-align: middle;
  }

  img {
    width: 1.5rem;
    vertical-align: middle;
    margin-right: 0.25rem;
  }
  &:hover {
    font-weight: 700;
    border-radius: 8px;
  }
`;
