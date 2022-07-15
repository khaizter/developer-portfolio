import styled from "styled-components";

export const StyledProjectDetails = styled.div`
  width: 50%;
  background-color: white;
  padding: 2rem;
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
  img {
    display: block;
    width: 1.5rem;
  }
`;

export const Description = styled.p``;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Link = styled.a`
  border: 1px solid black;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  span {
    vertical-align: middle;
  }

  img {
    width: 1.5rem;
    vertical-align: middle;
    margin-right: 0.25rem;
  }
`;
