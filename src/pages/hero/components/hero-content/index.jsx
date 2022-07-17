import React from "react";

import {
  StyledHeroContent,
  HeroTitle,
  HeroParagraph,
  HeroActions,
  HeroButton,
} from "./HeroContent.elements";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const actionsVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const HeroContent = () => {
  return (
    <StyledHeroContent variants={containerVariants}>
      <HeroTitle variants={titleVariants}>Hi, I'm Khaizter</HeroTitle>
      <HeroParagraph variants={paragraphVariants}>
        A passionate Full Stack Developer having a special interest in Frontend
        technologies and experience of building Web applications with JavaScript
        / ReactJS / NodeJS and some other cool libraries and frameworks.
      </HeroParagraph>
      <HeroActions variants={actionsVariants}>
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
