import React from "react";
import Navigation from "../navigation";
import NavigationMenu from "../navigation-menu";
import {
  StyledHeader,
  FlexContainer,
  Brand,
  SymbolLeft,
  SymbolRight,
} from "./Header.elements";
import Wrapper from "../wrapper";

const headerVariants = {
  hidden: {},
  visible: {},
};

const brandVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delayChildren: 0.2,
    },
  },
};

const leftSymbolVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const rightSymbolVariants = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <FlexContainer
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <Brand href="#home-section" variants={brandVariants}>
            <SymbolLeft variants={leftSymbolVariants}>{"<"}</SymbolLeft>KHAIZTER
            <SymbolRight variants={rightSymbolVariants}>{"/>"}</SymbolRight>
          </Brand>
          <Navigation />
          <NavigationMenu />
        </FlexContainer>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
