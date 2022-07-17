import React from "react";

import { StyledProjectList } from "./ProjectList.element";
import ProjectItem from "../project-item";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ProjectList = ({ projects }) => {
  return (
    <StyledProjectList variants={listVariants}>
      {projects?.map((project, index) => {
        return <ProjectItem key={index} project={project} />;
      })}
    </StyledProjectList>
  );
};

export default ProjectList;
