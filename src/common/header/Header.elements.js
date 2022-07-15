import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.75rem;
  padding-inline: 4rem;
`;

export const Brand = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font-size: 2.25rem;
`;
