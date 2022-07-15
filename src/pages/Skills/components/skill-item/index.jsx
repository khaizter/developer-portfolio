import React from "react";

import { StyledSkillItem, Icon, HoverText } from "./SkillItem.elements";

const SkillItem = ({ icon, hoverText }) => {
  return (
    <StyledSkillItem>
      <Icon src={icon} alt={hoverText} />
      <HoverText>{hoverText}</HoverText>
    </StyledSkillItem>
  );
};

export default SkillItem;
