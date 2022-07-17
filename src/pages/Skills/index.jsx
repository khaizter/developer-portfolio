import React, { useState } from "react";

import { StyledSkills, FlexContainer, Title } from "./Skills.elements";
import Wrapper from "../../common/wrapper";
import Filter from "./components/filter";
import SkillList from "./components/skill-list";

import ExpressIcon from "../../assets/svg/express.svg";
import GitIcon from "../../assets/svg/git.svg";
import GitHubIcon from "../../assets/svg/github.svg";
import MongoDBIcon from "../../assets/svg/mongodb.svg";
import MaterialUIIcon from "../../assets/svg/mui.svg";
import MySQLIcon from "../../assets/svg/mysql.svg";
import NodeJSIcon from "../../assets/svg/nodedotjs.svg";
import ReactIcon from "../../assets/svg/react.svg";
import ReactRouterIcon from "../../assets/svg/reactrouter.svg";
import ReduxIcon from "../../assets/svg/redux.svg";
import SassIcon from "../../assets/svg/sass.svg";
import TailWindIcon from "../../assets/svg/tailwindcss.svg";
import FigmaIcon from "../../assets/svg/icons8-figma.svg";
import FramerMotionIcon from "../../assets/images/framer-motion.png";
import RestAPIIcon from "../../assets/svg/api.svg";
import TypescriptIcon from "../../assets/svg/typescript.svg";
import StyledComponentsIcon from "../../assets/svg/styled-components.svg";

const skills = [
  {
    icon: ReactIcon,
    hoverText: "React",
    category: "front-end",
  },
  {
    icon: ReactRouterIcon,
    hoverText: "React Router",
    category: "front-end",
  },
  {
    icon: ReduxIcon,
    hoverText: "Redux",
    category: "others",
  },
  {
    icon: StyledComponentsIcon,
    hoverText: "Styled Components",
    category: "front-end",
  },
  {
    icon: SassIcon,
    hoverText: "Sass",
    category: "front-end",
  },
  {
    icon: MaterialUIIcon,
    hoverText: "Material UI",
    category: "front-end",
  },
  {
    icon: TailWindIcon,
    hoverText: "Tailwind",
    category: "front-end",
  },
  {
    icon: NodeJSIcon,
    hoverText: "Node JS",
    category: "back-end",
  },
  {
    icon: ExpressIcon,
    hoverText: "Express",
    category: "back-end",
  },
  {
    icon: RestAPIIcon,
    hoverText: "REST API",
    category: "back-end",
  },
  {
    icon: MongoDBIcon,
    hoverText: "MongoDB",
    category: "back-end",
  },
  {
    icon: MySQLIcon,
    hoverText: "MySQL",
    category: "back-end",
  },
  {
    icon: GitIcon,
    hoverText: "Git",
    category: "others",
  },
  {
    icon: GitHubIcon,
    hoverText: "Github",
    category: "others",
  },

  {
    icon: FigmaIcon,
    hoverText: "Figma",
    category: "front-end",
  },
  {
    icon: FramerMotionIcon,
    hoverText: "Framer Motion",
    category: "front-end",
  },
  {
    icon: TypescriptIcon,
    hoverText: "Typescript",
    category: "others",
  },
];

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <StyledSkills id="skills-section">
      <Wrapper>
        <FlexContainer>
          <Title>Skills & Technologies</Title>
          <Filter setFilter={setFilter} />
          <SkillList skills={filteredSkills} />
        </FlexContainer>
      </Wrapper>
    </StyledSkills>
  );
};

export default Skills;
