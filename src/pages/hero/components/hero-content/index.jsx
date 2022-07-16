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
        <HeroButton as="a" href="https://github.com/khaizter/" target="_blank">
          View on Github
        </HeroButton>
        <HeroButton
          as="a"
          href="https://www.linkedin.com/in/khaizter-vash-topacio-a22bb0232/"
          target="_blank"
        >
          View on LinkedIn
        </HeroButton>
      </HeroActions>
    </StyledHeroContent>
  );
};

export default HeroContent;
