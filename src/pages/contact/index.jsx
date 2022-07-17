import React from "react";

import {
  StyledContact,
  FlexContainer,
  Title,
  UpArrow,
} from "./Contact.elements";
import Wrapper from "../../common/wrapper";
import ContactList from "./components/contact-list";

import PhoneIcon from "../../assets/svg/phone.svg";
import EmailIcon from "../../assets/svg/email.svg";
import LocationIcon from "../../assets/svg/location.svg";
import ChevronUpIcon from "../../assets/svg/double-chevron-up.svg";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  return (
    <StyledContact id="contact-section">
      <Wrapper>
        <FlexContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <UpArrow href="#home-section">
            <img src={ChevronUpIcon} alt="go up" />
          </UpArrow>
          <Title variants={titleVariants}>Contact</Title>
          <ContactList contacts={contacts} />
        </FlexContainer>
      </Wrapper>
    </StyledContact>
  );
};

export default Contact;
