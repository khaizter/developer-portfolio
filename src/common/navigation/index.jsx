import React from "react";

import { Nav, List, ListItem, ListItemResume } from "./Navigation.elements";
import Resume from "../../assets/pdf/Resume.pdf";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <a href="#home-section">Home</a>
        </ListItem>
        <ListItem>
          <a href="#skills-section">Skills</a>
        </ListItem>
        <ListItem>
          <a href="#projects-section">Projects</a>
        </ListItem>
        <ListItem>
          <a href="#contact-section">Contact</a>
        </ListItem>
        <ListItemResume resume>
          <a href={Resume} target="_blank">
            Resume
          </a>
        </ListItemResume>
      </List>
    </Nav>
  );
};

export default Navigation;
