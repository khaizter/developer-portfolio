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

const navigationVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

const closeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const resumeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenuHandler = () => {
    setShowMenu(true);
  };

  const hideMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <StyledNavigationMenu>
      <Backdrop showBackdrop={showMenu} onClickOut={() => setShowMenu(false)} />
      <Modal showModal={showMenu}>
        <Nav
          variants={navigationVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Close onClick={() => setShowMenu(false)} variants={closeVariants}>
            <img src={CloseIcon} alt="Close button" />
          </Close>
          <List variants={listVariants}>
            <ListItem variants={listItemVariants}>
              <a href="#home-section" onClick={hideMenuHandler}>
                Home
              </a>
            </ListItem>
            <ListItem variants={listItemVariants}>
              <a href="#projects-section" onClick={hideMenuHandler}>
                Projects
              </a>
            </ListItem>
            <ListItem variants={listItemVariants}>
              <a href="#skills-section" onClick={hideMenuHandler}>
                Skills
              </a>
            </ListItem>
            <ListItem variants={listItemVariants}>
              <a href="#contact-section" onClick={hideMenuHandler}>
                Contact
              </a>
            </ListItem>
          </List>
          <ResumeLink href={Resume} target="_blank" variants={resumeVariants}>
            Resume
          </ResumeLink>
        </Nav>
      </Modal>
      <Hamburger onClick={openMenuHandler}>
        <HamburgerIcon />
      </Hamburger>
    </StyledNavigationMenu>
  );
};

export default NavigationMenu;
