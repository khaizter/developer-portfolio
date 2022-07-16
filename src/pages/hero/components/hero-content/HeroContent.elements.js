import styled from "styled-components";
import Device from "../../../../globals/Devices";

export const StyledHeroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.625rem;
  width: 100%;
  @media ${Device.tablet} {
    align-items: flex-start;
    width: 50%;
  }
`;

export const HeroTitle = styled.h1`
  color: ${(props) => props.theme.primaryText};
  font-size: clamp(2.5rem, 1rem + 2vw, 3rem);
`;

export const HeroParagraph = styled.p`
  max-width: 45ch;
  line-height: 1.2;
  color: ${(props) => props.theme.secondaryText};
  font-size: 1rem;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Device.mobileM} {
    flex-direction: row;
  }
  gap: 2rem;
`;

export const HeroButton = styled.button`
  text-decoration: none;
  border: none;
  background-color: ${(props) => props.theme.accent};
  /* border: 1px solid ${(props) => props.theme.primary}; */
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: white;
  /* color: ${(props) => props.theme.primary}; */
  font-size: 1.25rem;
  padding-block: 0.625rem;
  padding-inline: 1.25rem;
  border-radius: 8px;
  position: relative;

  &::after {
    content: "";
    background-color: ${(props) => props.theme.secondary};

    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 20%;
    height: 2px;
    transition: width 0.2s ease-in-out;
  }

  &:hover::after {
    width: 60%;
  }
`;
