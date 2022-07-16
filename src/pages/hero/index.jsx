import React from "react";
import { StyledHero, FlexContainer, StyledHeroDisplay } from "./Hero.elements";
import HeroContent from "./components/hero-content";
import Wrapper from "../../common/wrapper";

const Hero = () => {
  return (
    <StyledHero id="home-section">
      <Wrapper>
        <FlexContainer>
          <HeroContent />
          <StyledHeroDisplay />
        </FlexContainer>
      </Wrapper>
    </StyledHero>
  );
};

export default Hero;
