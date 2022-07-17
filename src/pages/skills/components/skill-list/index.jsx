import React from "react";
import SkillItem from "../skill-item";
import { AnimatePresence } from "framer-motion";

import { StyledSkillList } from "./SkillList.elements";

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillList = ({ skills }) => {
  return (
    <StyledSkillList variants={listVariants}>
      <AnimatePresence>
        {skills.map((skill) => {
          return (
            <SkillItem
              key={skill.hoverText}
              icon={skill.icon}
              hoverText={skill.hoverText}
            />
          );
        })}
      </AnimatePresence>
    </StyledSkillList>
  );
};

export default SkillList;
