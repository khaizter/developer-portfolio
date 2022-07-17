import React from "react";

import { StyledSkillItem, Icon, HoverText, Circle } from "./SkillItem.elements";

const SkillItem = ({ icon, hoverText }) => {
  return (
    <StyledSkillItem
      layout
      animate={{ opacity: 1, transition: { ease: "easeInOut" } }}
      initial={{ opacity: 0, transition: { ease: "easeInOut" } }}
      exit={{ opacity: 0, transition: { ease: "easeInOut", duration: 0.07 } }}
      transition={{ layout: { ease: "easeInOut", duration: 0.3 } }}
    >
      <Circle>
        <Icon src={icon} alt={hoverText} />
      </Circle>
      <HoverText>{hoverText}</HoverText>
    </StyledSkillItem>
  );
};

export default SkillItem;
