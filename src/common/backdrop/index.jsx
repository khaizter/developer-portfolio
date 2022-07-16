import ReactDom from "react-dom";

import { StyledBackdrop } from "./Backdrop.elements";

const Backdrop = ({ showBackdrop, onClickOut }) => {
  if (!showBackdrop) return null;
  return ReactDom.createPortal(
    <StyledBackdrop onClick={onClickOut} />,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
