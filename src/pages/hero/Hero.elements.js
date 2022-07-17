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
  gap: 2rem;
  padding-block: 4rem;
  @media ${Device.tablet} {
    flex-direction: row;
    padding-block: 6.25rem;
  }
`;

export const StyledHeroDisplay = styled(HeroDisplay)`
  aspect-ratio: 128/97;
  width: 100%;
  height: auto;
  @media ${Device.tablet} {
    width: 50%;
  }
`;
