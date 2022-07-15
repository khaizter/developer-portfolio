import styled from "styled-components";

export const StyledContact = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
  background-color: ${(props) => props.theme.primary};
  padding: 5rem;
`;

export const Title = styled.h1`
  color: white;
`;
