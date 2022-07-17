import React, { useState } from "react";

import LinkIcon from "../../../../assets/svg/link.svg";

import GithubIcon from "../../../../assets/svg/github.svg";

import CloseIcon from "../../../../assets/svg/close.svg";

import ChevronRightIcon from "../../../../assets/svg/chevron-right.svg";
import ChevronLeftIcon from "../../../../assets/svg/chevron-left.svg";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const contentChildrenVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

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
    <StyledProjectDetails
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Preview variants={containerVariants}>
        <Display>
          <img src={images[currentSlide].src} alt={images[currentSlide].name} />
          <NextSlider onClick={nextSlideHandler}>
            <img src={ChevronRightIcon} alt="next slider" />
          </NextSlider>
          <PrevSlider onClick={prevSlideHandler}>
            <img src={ChevronLeftIcon} alt="prev-slider" />
          </PrevSlider>
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
      <Content variants={contentVariants}>
        <Close onClick={onClose} variants={contentChildrenVariants}>
          <img src={CloseIcon} alt="close button" />
        </Close>
        <Title variants={contentChildrenVariants}>{title}</Title>
        <Technologies variants={contentChildrenVariants}>
          {technologies.map((technology, index) => {
            return (
              <TechnologyItem key={index}>
                <img src={technology.src} alt={technology.name} />
                <p>{technology.name}</p>
              </TechnologyItem>
            );
          })}
        </Technologies>
        <motion.h2 variants={contentChildrenVariants}>About</motion.h2>
        <ScrollableDiv variants={contentChildrenVariants}>
          {about?.map((paragraph, index) => {
            return <About key={index}>{paragraph}</About>;
          })}

          {features && <h3>Features</h3>}
          <List>
            {features?.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </List>
          {futureDevelopment && <h3>Future Development</h3>}

          <List>
            {futureDevelopment?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </List>
        </ScrollableDiv>
        <Actions variants={contentChildrenVariants}>
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
