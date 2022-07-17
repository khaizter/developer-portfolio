import React from "react";
import { StyledHero, FlexContainer, StyledHeroDisplay } from "./Hero.elements";
import HeroContent from "./components/hero-content";
import Wrapper from "../../common/wrapper";

const containerVariants = {
  hidden: {},
  visible: {},
};

const heroDisplayVariants = {
  hidden: { opacity: 0, x: "50%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <StyledHero id="home-section">
      <Wrapper>
        <FlexContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <HeroContent />
          <StyledHeroDisplay variants={heroDisplayVariants} />
        </FlexContainer>
      </Wrapper>
    </StyledHero>
  );
};

export default Hero;
