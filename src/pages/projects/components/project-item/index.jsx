import React from "react";

import {
  StyledProjectItem,
  Image,
  Content,
  Title,
  Description,
  Actions,
  Link,
} from "./ProjectItem.elements";

import LinkIcon from "../../../../assets/svg/link.svg";
import GithubIcon from "../../../../assets/svg/github.svg";
import DotsIcon from "../../../../assets/svg/dots.svg";

const ProjectItem = ({
  image,
  title,
  description,
  demoUrl,
  githubUrl,
  detailsUrl,
}) => {
  return (
    <StyledProjectItem>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Actions>
          <Link href={demoUrl}>
            <img src={LinkIcon} alt="demo" />
          </Link>
          <Link href={githubUrl}>
            <img src={GithubIcon} alt="github" />
          </Link>
          <Link href={detailsUrl}>
            <img src={DotsIcon} alt="view details" />
          </Link>
        </Actions>
      </Content>
    </StyledProjectItem>
  );
};

export default ProjectItem;
