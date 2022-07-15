import React from "react";
import { StyledHero } from "./Hero.elements";
import HeroContent from "./components/hero-content";
import HeroDisplay from "../../assets/svg/HeroDisplay";

const Hero = () => {
  return (
    <StyledHero>
      <HeroContent />
      <HeroDisplay />
    </StyledHero>
  );
};

export default Hero;
