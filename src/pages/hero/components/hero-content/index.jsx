import React from "react";

import {
  StyledHeroContent,
  HeroTitle,
  HeroParagraph,
  HeroActions,
  HeroButton,
} from "./HeroContent.elements";

const HeroContent = () => {
  return (
    <StyledHeroContent>
      <HeroTitle>Hi, I'm Khaizter</HeroTitle>
      <HeroParagraph>
        A passionate Full Stack Developer having a special interest in Frontend
        technologies and experience of building Web applications with JavaScript
        / ReactJS / NodeJS and some other cool libraries and frameworks.
      </HeroParagraph>
      <HeroActions>
        <HeroButton>View on Github</HeroButton>
        <HeroButton>View on LinkedIn</HeroButton>
      </HeroActions>
    </StyledHeroContent>
  );
};

export default HeroContent;
