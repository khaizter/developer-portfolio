import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  min-height: calc(100vh - 100px);
  padding-inline: 4rem;
`;
