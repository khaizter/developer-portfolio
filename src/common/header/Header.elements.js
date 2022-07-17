import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.primary};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.75rem;
`;

export const Brand = styled.a`
  display: block;

  font-family: "Josefin Sans", sans-serif;
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);
  span {
    font-family: "Montserrat", sans-serif;
    color: white;

    &:nth-child(1) {
      margin-right: 0.75rem;
    }
    &:nth-child(2) {
      margin-left: 0.75rem;
    }
  }
`;
