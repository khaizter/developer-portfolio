import React, { useState } from "react";

import { StyledSkills, FlexContainer, Title } from "./Skills.elements";
import Wrapper from "../../common/wrapper";
import Filter from "./components/filter";
import SkillList from "./components/skill-list";

import skills from "../../data/skills";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <StyledSkills id="skills-section">
      <Wrapper>
        <FlexContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={titleVariants}>Skills & Technologies</Title>
          <Filter setFilter={setFilter} />
          <SkillList skills={filteredSkills} />
        </FlexContainer>
      </Wrapper>
    </StyledSkills>
  );
};

export default Skills;
