import React from "react";

import { StyledSkillItem, Icon, HoverText, Circle } from "./SkillItem.elements";

const SkillItem = ({ icon, hoverText }) => {
  return (
    <StyledSkillItem>
      <Circle>
        <Icon src={icon} alt={hoverText} />
      </Circle>
      <HoverText>{hoverText}</HoverText>
    </StyledSkillItem>
  );
};

export default SkillItem;
