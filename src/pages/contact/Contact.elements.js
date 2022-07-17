import styled from "styled-components";
import Device from "../../globals/Devices";

export const StyledContact = styled.footer`
  background-color: ${(props) => props.theme.primary};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
  padding-block: 4rem;
  position: relative;
  @media ${Device.tablet} {
    padding-block: 6.25rem;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: clamp(2.5rem, 1rem + 2vw, 3rem);
`;

export const UpArrow = styled.a`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.accent};
  padding: 0.25rem;
  img {
    display: block;
  }
`;
