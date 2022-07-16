import React, { useEffect } from "react";
import ReactDom from "react-dom";

import { StyledModal } from "./Modal.element";

const Modal = ({ showModal, children }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  if (!showModal) return null;
  return ReactDom.createPortal(
    <StyledModal>{children}</StyledModal>,
    document.getElementById("modal")
  );
};

export default Modal;
