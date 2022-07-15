import React, { useState } from "react";

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

import Backdrop from "../../../../common/header/components/backdrop";
import Modal from "../../../../common/header/components/modal";

import ProjectDetails from "../project-details";

const ProjectItem = ({
  image,
  title,
  description,
  demoUrl,
  githubUrl,
  detailsUrl,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const openDetailsHandler = () => setShowDetails(true);
  const closeDetailsHandler = () => setShowDetails(false);

  return (
    <>
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
            <Link as="button" onClick={openDetailsHandler}>
              <img src={DotsIcon} alt="view details" />
            </Link>
          </Actions>
        </Content>
      </StyledProjectItem>
      <Backdrop showBackdrop={showDetails} onClickOut={closeDetailsHandler} />
      <Modal showModal={showDetails}>
        <ProjectDetails />
      </Modal>
    </>
  );
};

export default ProjectItem;
