import React from "react";

import { StyledContactItem, Title, Info } from "./ContactItem.elements";

import PhoneIcon from "../../../../assets/svg/phone.svg";
import EmailIcon from "../../../../assets/svg/email.svg";
import LocationIcon from "../../../../assets/svg/location.svg";

const ContactItem = ({ icon, title, info }) => {
  return (
    <StyledContactItem>
      <img src={icon} alt="" />
      <Title>{title}</Title>
      <Info>{info}</Info>
    </StyledContactItem>
  );
};

export default ContactItem;
