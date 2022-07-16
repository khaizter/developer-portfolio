import React, { useState } from "react";

import LinkIcon from "../../../../assets/svg/link.svg";

import GithubIcon from "../../../../assets/svg/github.svg";

import CloseIcon from "../../../../assets/svg/close.svg";

import {
  StyledProjectDetails,
  Preview,
  NextSlider,
  PrevSlider,
  Thumbnails,
  ThumbnailItem,
  Content,
  Close,
  Title,
  Technologies,
  TechnologyItem,
  ScrollableDiv,
  About,
  List,
  Actions,
  Link,
  Display,
} from "./ProjectDetails.elements";

const ProjectDetails = ({ project, onClose }) => {
  const {
    images,
    title,
    about,
    features,
    futureDevelopment,
    demoUrl,
    githubUrl,
    technologies,
  } = project;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlideHandler = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === images.length - 1 ? 0 : prevSlide + 1;
    });
  };

  const prevSlideHandler = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === 0 ? images.length - 1 : prevSlide - 1;
    });
  };

  return (
    <StyledProjectDetails>
      <Preview>
        <Display>
          <img src={images[currentSlide].src} alt={images[currentSlide].name} />
          <NextSlider onClick={nextSlideHandler}>Next</NextSlider>
          <PrevSlider onClick={prevSlideHandler}>Prev</PrevSlider>
        </Display>
        <Thumbnails>
          {images.map((image, index) => {
            return (
              <ThumbnailItem
                key={index}
                onClick={setCurrentSlide.bind(null, index)}
                active={currentSlide === index}
              >
                <img src={image.src} alt={image.name} />
              </ThumbnailItem>
            );
          })}
        </Thumbnails>
      </Preview>

      <Content>
        <Close onClick={onClose}>
          <img src={CloseIcon} alt="close button" />
        </Close>
        <Title>{title}</Title>
        <Technologies>
          {technologies.map((technology, index) => {
            return (
              <TechnologyItem key={index}>
                <img src={technology.src} alt={technology.name} />
                <p>{technology.name}</p>
              </TechnologyItem>
            );
          })}
        </Technologies>
        <h2>About</h2>
        <ScrollableDiv>
          {about?.map((paragraph, index) => {
            return <About key={index}>{paragraph}</About>;
          })}

          <h3>Features</h3>
          <List>
            {features?.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </List>
          <h3>Future Development</h3>

          <List>
            {futureDevelopment?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </List>
        </ScrollableDiv>
        <Actions>
          <Link href={demoUrl} target="_blank">
            <img src={LinkIcon} alt="Demo" />
            <span>Demo</span>
          </Link>
          <Link href={githubUrl} target="_blank">
            <img src={GithubIcon} alt="Repository" />
            <span>Repo</span>
          </Link>
        </Actions>
      </Content>
    </StyledProjectDetails>
  );
};

export default ProjectDetails;
