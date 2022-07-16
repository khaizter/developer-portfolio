import React from "react";

import { Nav, List, ListItem } from "./Navigation.elements";
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
        <ListItem resume>
          <a href={Resume} target="_blank">
            Resume
          </a>
        </ListItem>
      </List>
    </Nav>
  );
};

export default Navigation;
