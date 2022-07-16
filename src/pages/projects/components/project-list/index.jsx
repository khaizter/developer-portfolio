import React from "react";

import { StyledProjectList } from "./ProjectList.element";
import ProjectItem from "../project-item";
const ProjectList = ({ projects }) => {
  return (
    <StyledProjectList>
      {projects?.map((project, index) => {
        return <ProjectItem key={index} project={project} />;
      })}
    </StyledProjectList>
  );
};

export default ProjectList;
