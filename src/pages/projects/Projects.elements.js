import styled from "styled-components";

export const StyledProjects = styled.section`
  background-color: ${(props) => props.theme.white};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-block: 6.25rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.primaryText};
  font-size: clamp(2.5rem, 1rem + 2vw, 3rem);
`;
