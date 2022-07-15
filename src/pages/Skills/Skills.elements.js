import styled from "styled-components";

export const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.white};
  background-color: #fcfcfc;
  min-height: calc(100vh - 100px);
  /* padding-block: 6.25rem; */
  padding-inline: 4rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.primaryText};
  font-size: 3rem;
`;
