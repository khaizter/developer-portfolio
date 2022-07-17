import React from "react";

import { Nav, List, ListItem, ListItemResume } from "./Navigation.elements";
import Resume from "../../assets/pdf/Resume.pdf";

const listVariants = {
  hidden: { x: 20 },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Navigation = () => {
  return (
    <Nav>
      <List variants={listVariants}>
        <ListItem variants={listItemVariants}>
          <a href="#home-section">Home</a>
        </ListItem>
        <ListItem variants={listItemVariants}>
          <a href=" #skills-section">Skills</a>
        </ListItem>
        <ListItem variants={listItemVariants}>
          <a href="#projects-section">Projects</a>
        </ListItem>
        <ListItem variants={listItemVariants}>
          <a href="#contact-section">Contact</a>
        </ListItem>
        <ListItemResume variants={listItemVariants}>
          <a href={Resume} target="_blank">
            Resume
          </a>
        </ListItemResume>
      </List>
    </Nav>
  );
};

export default Navigation;
