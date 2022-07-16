import React from "react";

import { Nav, List, ListItem } from "./Navigation.elements";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <ListItem active>
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
      </List>
    </Nav>
  );
};

export default Navigation;
