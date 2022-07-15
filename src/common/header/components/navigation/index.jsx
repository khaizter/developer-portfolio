import React from "react";

import { Nav, List, ListItem } from "./Navigation.elements";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <ListItem active>
          <a href="#">Home</a>
        </ListItem>
        <ListItem>
          <a href="#">About Me</a>
        </ListItem>
        <ListItem>
          <a href="#">Projects</a>
        </ListItem>
        <ListItem>
          <a href="#">Contact</a>
        </ListItem>
      </List>
    </Nav>
  );
};

export default Navigation;
