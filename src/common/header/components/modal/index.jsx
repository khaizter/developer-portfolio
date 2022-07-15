import React from "react";
import ReactDom from "react-dom";

import { StyledModal } from "./Modal.element";

const Modal = ({ showModal, children }) => {
  if (!showModal) return null;
  return ReactDom.createPortal(
    <StyledModal>{children}</StyledModal>,
    document.getElementById("modal")
  );
};

export default Modal;
