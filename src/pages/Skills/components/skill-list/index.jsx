import React from "react";
import SkillItem from "../skill-item";

import { StyledSkillList } from "./SkillList.elements";

const SkillList = ({ skills }) => {
  return (
    <StyledSkillList>
      {skills.map((skill, index) => {
        return (
          <SkillItem
            key={index}
            icon={skill.icon}
            hoverText={skill.hoverText}
          />
        );
      })}
    </StyledSkillList>
  );
};

export default SkillList;
