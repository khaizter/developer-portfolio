import React, { useState } from "react";

import {
  StyledNavigationMenu,
  Hamburger,
  Close,
  Nav,
  List,
  ListItem,
  ResumeLink,
} from "./NavigationMenu.elements";
import CloseIcon from "../../assets/svg/close.svg";
import HamburgerIcon from "../../assets/svg/HamburgerIcon.jsx";
import Backdrop from "../backdrop";
import Modal from "../modal";

import Resume from "../../assets/pdf/Resume.pdf";

const NavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenuHandler = () => {};

  const hideMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <StyledNavigationMenu>
      <Backdrop showBackdrop={showMenu} onClickOut={() => setShowMenu(false)} />
      <Modal showModal={showMenu}>
        <Nav>
          <Close onClick={() => setShowMenu(false)}>
            <img src={CloseIcon} alt="Close button" />
          </Close>
          <List>
            <ListItem>
              <a href="#home-section" onClick={hideMenuHandler}>
                Home
              </a>
            </ListItem>
            <ListItem>
              <a href="#skills-section" onClick={hideMenuHandler}>
                Skills
              </a>
            </ListItem>
            <ListItem>
              <a href="#projects-section" onClick={hideMenuHandler}>
                Projects
              </a>
            </ListItem>
            <ListItem>
              <a href="#contact-section" onClick={hideMenuHandler}>
                Contact
              </a>
            </ListItem>
          </List>
          <ResumeLink href={Resume} target="_blank">
            Resume
          </ResumeLink>
        </Nav>
      </Modal>
      <Hamburger onClick={() => setShowMenu(true)}>
        <HamburgerIcon />
      </Hamburger>
    </StyledNavigationMenu>
  );
};

export default NavigationMenu;
