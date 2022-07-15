import React from "react";

import { StyledProjectList } from "./ProjectList.element";
import ProjectItem from "../project-item";
const ProjectList = ({ projects }) => {
  return (
    <StyledProjectList>
      {projects?.map((project, index) => {
        return (
          <ProjectItem
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            detailsUrl={project.detailsUrl}
          />
        );
      })}
    </StyledProjectList>
  );
};

export default ProjectList;
