import styled from "styled-components";

export const StyledProjectDetails = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 55%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 45%;
  img {
    display: block;
    width: 100%;
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
  opacity: 0;
  display: block;
  color: white;
  background: none;
  background-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 0.548)
  );
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
  &:hover {
    opacity: 1;
  }
`;
export const PrevSlider = styled.button`
  opacity: 0;
  display: block;
  color: white;
  background: none;
  background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.548));
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

  &:hover {
    opacity: 1;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
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

export const Content = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-rows: max-content max-content max-content 1fr max-content;
  max-height: 32rem;
  background-color: white;
  padding: 2rem;
  width: 45%;
  position: relative;
`;

export const Close = styled.button`
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

export const Title = styled.h1``;

export const Technologies = styled.ul`
  display: flex;
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

export const ScrollableDiv = styled.div`
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

export const Actions = styled.div`
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
