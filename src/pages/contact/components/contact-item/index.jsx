import React, { useEffect, useState } from "react";

import {
  StyledContactItem,
  Title,
  Info,
  CopyClipboard,
} from "./ContactItem.elements";

import ClipboardIcon from "../../../../assets/svg/copyclipboard.svg";
import ClipboardCheckIcon from "../../../../assets/svg/copyclipboardcheck.svg";

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const ContactItem = ({ icon, title, info }) => {
  const [copied, setCopied] = useState(false);

  const clipboardHandler = () => {
    navigator.clipboard.writeText(info);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const checkTimeout = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(checkTimeout);
    };
  }, [copied]);

  return (
    <StyledContactItem onClick={clipboardHandler} variants={listItemVariants}>
      <img src={icon} alt="" />
      <Title>{title}</Title>
      <Info>{info}</Info>
      <CopyClipboard
        src={copied ? ClipboardCheckIcon : ClipboardIcon}
        alt="copy to clipboard"
      />
    </StyledContactItem>
  );
};

export default ContactItem;
