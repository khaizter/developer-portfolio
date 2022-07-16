import styled from "styled-components";
import Device from "../../globals/Devices";
import HeroDisplay from "../../assets/svg/HeroDisplay";

export const StyledHero = styled.section`
  background-color: ${(props) => props.theme.white};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-block: 6.25rem;
  @media ${Device.tablet} {
    flex-direction: row;
  }
`;

export const StyledHeroDisplay = styled(HeroDisplay)`
  width: 100%;
  @media ${Device.tablet} {
    width: 50%;
  }
`;
