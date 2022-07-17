import React, { useEffect } from "react";
import ReactDom from "react-dom";

import { StyledModal } from "./Modal.element";
import { AnimatePresence } from "framer-motion";

const Modal = ({ showModal, children }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  return ReactDom.createPortal(
    <AnimatePresence>
      {showModal ? <StyledModal>{children}</StyledModal> : null}
    </AnimatePresence>,
    document.getElementById("modal")
  );
};

export default Modal;
