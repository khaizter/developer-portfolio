import React from "react";

import { StyledProjects, FlexContainer, Title } from "./Projects.elements";
import Wrapper from "../../common/wrapper";
import ProjectList from "./components/project-list";

import projects from "../../data/projects";

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

const Projects = () => {
  return (
    <StyledProjects id="projects-section">
      <Wrapper>
        <FlexContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={titleVariants}>Projects</Title>
          <ProjectList projects={projects} />
        </FlexContainer>
      </Wrapper>
    </StyledProjects>
  );
};

export default Projects;
