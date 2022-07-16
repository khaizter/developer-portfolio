import React from "react";
import Navigation from "./components/navigation";
import { StyledHeader, Brand } from "./Header.elements";

const Header = () => {
  return (
    <StyledHeader>
      <Brand href="#">
        <span>{"<"}</span>KHAIZTER<span>{"/>"}</span>
      </Brand>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
