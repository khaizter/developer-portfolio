import React from "react";

import { StyledContactList } from "./ContactList.element";
import ContactItem from "../contact-item";

const ContactList = ({ contacts }) => {
  return (
    <StyledContactList>
      {contacts?.map((contact, index) => {
        return (
          <ContactItem
            key={index}
            icon={contact.icon}
            title={contact.title}
            info={contact.info}
          />
        );
      })}
    </StyledContactList>
  );
};

export default ContactList;
