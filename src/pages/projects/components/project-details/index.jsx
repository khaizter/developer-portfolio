import React from "react";

import ReactIcon from "../../../../assets/svg/react.svg";

import LinkIcon from "../../../../assets/svg/link.svg";

import GithubIcon from "../../../../assets/svg/github.svg";

import {
  StyledProjectDetails,
  Title,
  Technologies,
  TechnologyItem,
  Description,
  Actions,
  Link,
} from "./ProjectDetails.elements";

const ProjectDetails = () => {
  return (
    <StyledProjectDetails>
      <Title>Title</Title>
      <Technologies>
        <TechnologyItem>
          <img src={ReactIcon} alt="" />
        </TechnologyItem>
        <TechnologyItem>
          <img src={ReactIcon} alt="" />
        </TechnologyItem>
        <TechnologyItem>
          <img src={ReactIcon} alt="" />
        </TechnologyItem>
      </Technologies>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        cumque sed quia exercitationem. Blanditiis repellendus, sint illo omnis
        sequi mollitia dolores tempora debitis magni minima.
      </Description>
      <Actions>
        <Link>
          <img src={LinkIcon} alt="" />
          <span>Demo</span>
        </Link>
        <Link>
          <img src={GithubIcon} alt="" />
          <span>Repo</span>
        </Link>
      </Actions>
    </StyledProjectDetails>
  );
};

export default ProjectDetails;
