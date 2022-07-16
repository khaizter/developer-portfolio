import React from "react";

import { StyledContact, Title } from "./Contact.elements";
import ContactList from "./components/contact-list";

import PhoneIcon from "../../assets/svg/phone.svg";
import EmailIcon from "../../assets/svg/email.svg";
import LocationIcon from "../../assets/svg/location.svg";

const contacts = [
  {
    icon: PhoneIcon,
    title: "Phone",
    info: "201910381",
  },
  {
    icon: EmailIcon,
    title: "Email",
    info: "khaizter.vashh@gmail.com",
  },
  {
    icon: LocationIcon,
    title: "Location",
    info: "Cavite, Philippines",
  },
];

const Contact = () => {
  return (
    <StyledContact id="contact-section">
      <Title>Contact</Title>
      <ContactList contacts={contacts} />
    </StyledContact>
  );
};

export default Contact;
