import React from "react";
import Navigation from "../navigation";
import NavigationMenu from "../navigation-menu";
import { StyledHeader, FlexContainer, Brand } from "./Header.elements";
import Wrapper from "../wrapper";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <FlexContainer>
          <Brand href="#home-section">
            <span>{"<"}</span>KHAIZTER<span>{"/>"}</span>
          </Brand>
          <Navigation />
          <NavigationMenu />
        </FlexContainer>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
