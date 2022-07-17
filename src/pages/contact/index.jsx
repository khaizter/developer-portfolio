import React from "react";

import {
  StyledContact,
  FlexContainer,
  Title,
  UpArrow,
} from "./Contact.elements";
import Wrapper from "../../common/wrapper";
import ContactList from "./components/contact-list";

import ChevronUpIcon from "../../assets/svg/double-chevron-up.svg";

import contacts from "../../data/contacts";

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
          viewport={{ once: true }}
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
