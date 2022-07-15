import React from "react";

import { StyledProjects, Title } from "./Projects.elements";
import ProjectList from "./components/project-list";

import TodoScreenshot from "../../assets/images/todo-app.png";

const projects = [
  {
    image: TodoScreenshot,
    title: "Todo App",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tenetur vero minima voluptatibus laudantium qui",
    demoUrl: "https://khaizter.github.io/todo-app/",
    githubUrl: "https://github.com/khaizter/todo-app",
    detailsUrl: "https://khaizter.github.io/todo-app/",
  },
  {
    image: TodoScreenshot,
    title: "Todo App2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tenetur vero minima voluptatibus laudantium qui",
    demoUrl: "https://khaizter.github.io/todo-app/",
    githubUrl: "https://github.com/khaizter/todo-app",
    detailsUrl: "https://khaizter.github.io/todo-app/",
  },
  {
    image: TodoScreenshot,
    title: "Todo App3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tenetur vero minima voluptatibus laudantium qui",
    demoUrl: "https://khaizter.github.io/todo-app/",
    githubUrl: "https://github.com/khaizter/todo-app",
    detailsUrl: "https://khaizter.github.io/todo-app/",
  },
];

const Projects = () => {
  return (
    <StyledProjects>
      <Title>Projects</Title>
      <ProjectList projects={projects} />
    </StyledProjects>
  );
};

export default Projects;
