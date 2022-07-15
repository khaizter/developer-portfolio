import styled from "styled-components";

export const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.white};
  padding-block: 6.25rem;
  padding-inline: 4rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.primaryText};
  font-size: 3rem;
`;
