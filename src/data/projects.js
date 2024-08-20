import ReactIcon from "../assets/svg/react.svg";
import ReactRouterIcon from "../assets/svg/reactrouter.svg";
import ReduxIcon from "../assets/svg/redux.svg";
import SassIcon from "../assets/svg/sass.svg";
import FramerMotionIcon from "../assets/images/framer-motion.png";
import NodejsIcon from "../assets/svg/nodedotjs.svg";
import ExpressIcon from "../assets/svg/express.svg";
import RestIcon from "../assets/svg/api.svg";
import MongodbIcon from "../assets/svg/mongodb.svg";
import StyledComponentsIcon from "../assets/svg/styled-components.svg";
import TypescriptIcon from "../assets/svg/typescript.svg";
import TailwindIcon from "../assets/svg/tailwindcss.svg";
import ShadCNIcon from "../assets/svg/shadcn.svg";
import NextJSIcon from "../assets/svg/next-js.svg";
import NextAuthIcon from "../assets/svg/next-auth.svg";
import GraphQLIcon from "../assets/svg/graphql.svg";

import TodoScreenshot1 from "../assets/images/todo-app_0.png";
import TodoScreenshot2 from "../assets/images/todo-app_1.png";
import TodoScreenshot3 from "../assets/images/todo-app_2.png";

import MovieScreenshot1 from "../assets/images/my-movie-list_0.png";
import MovieScreenshot2 from "../assets/images/my-movie-list_1.png";
import MovieScreenshot3 from "../assets/images/my-movie-list_2.png";

import CountryScreenshot1 from "../assets/images/country_0.png";
import CountryScreenshot2 from "../assets/images/country_1.png";
import CountryScreenshot3 from "../assets/images/country_2.png";

import SneakersScreenshot1 from "../assets/images/sneakers-ecommerce_0.png";
import SneakersScreenshot2 from "../assets/images/sneakers-ecommerce_1.png";
import SneakersScreenshot3 from "../assets/images/sneakers-ecommerce_2.png";

import ProjectAnimeScreenshot1 from "../assets/images/project-anime_0.png";
import ProjectAnimeScreenshot2 from "../assets/images/project-anime_1.png";
import ProjectAnimeScreenshot3 from "../assets/images/project-anime_2.png";

const projects = [
  {
    images: [
      { src: ProjectAnimeScreenshot1, name: "Project Anime Screenshot 3" },
      { src: ProjectAnimeScreenshot2, name: "Project Anime Screenshot 1" },
      { src: ProjectAnimeScreenshot3, name: "Project Anime Screenshot 2" },
    ],
    title: "Project Anime",
    description:
      "A web app for animes where you can authenticate and add an anime to favorites",
    about: [
      "Develop using next.js and tailwind.",
      "Data used were from AniList API.",
    ],
    features: [
      "Browsing and filtering animes",
      "Authentication to add personal favorites",
    ],
    demoUrl: "https://project-anime-hiim.vercel.app/",
    githubUrl: "https://github.com/khaizter/project-anime",
    technologies: [
      { src: NextJSIcon, name: "NextJS" },
      { src: NextAuthIcon, name: "Next Auth" },
      { src: TypescriptIcon, name: "Typescript" },
      { src: GraphQLIcon, name: "GraphQL" },
      { src: ShadCNIcon, name: "ShadCN" },
      { src: TailwindIcon, name: "Tailwind CSS" },
      { src: MongodbIcon, name: "Mongo DB" },
    ],
  },
  {
    images: [
      { src: TodoScreenshot1, name: "Todo Application Screenshot 1" },
      { src: TodoScreenshot2, name: "Todo Application Screenshot 2" },
      { src: TodoScreenshot3, name: "Todo Application Screenshot 3" },
    ],
    title: "Todo App",
    description:
      "A Full Stack Todo Application using MERN Stack and other libraries.",
    about: [
      "This is the first application I completely built using MERN Stack, during development I learned a lot of things on backend side like authentications, JSON web tokens, CORS, and etc. I also used a library called formik and yup in making forms.",
      "The designs were provided by frontendmentor.io challenge.",
    ],
    features: [
      "Add, delete, update status, reorder task",
      "Filtering of task by status",
      "Authentication",
      "Theme switching (light mode, dark mode)",
    ],
    futureDevelopment: [
      "Multiple todo list per user",
      "Edit text of task",
      "Auto save or auto sync of task to the database",
    ],
    demoUrl: "https://todo-khaizter.netlify.app/signin",
    githubUrl: "https://github.com/khaizter/todo-app",
    technologies: [
      { src: ReactIcon, name: "React" },
      { src: ReactRouterIcon, name: "React Router" },
      { src: ReduxIcon, name: "Redux" },
      { src: SassIcon, name: "SASS" },
      { src: FramerMotionIcon, name: "Framer Motion" },
      { src: NodejsIcon, name: "Node JS" },
      { src: ExpressIcon, name: "Express" },
      { src: RestIcon, name: "REST API" },
      { src: MongodbIcon, name: "Mongo DB" },
    ],
  },
  {
    images: [
      { src: CountryScreenshot3, name: "Country Screenshot 3" },
      { src: CountryScreenshot1, name: "Country Screenshot 1" },
      { src: CountryScreenshot2, name: "Country Screenshot 2" },
    ],
    title: "Country API",
    description: "A React Application using Country API and Styled Components",
    about: [
      "In this website I applied the things I learn from using styled components like theme switching and also playing with animations and transitions using framer motion.",
      "The designs were provided by frontendmentor.io challenge.",
    ],
    features: [
      "Viewing country details",
      "Filtering country by region and search query",
      "Theme Switching (light mode, dark mode)",
    ],
    demoUrl: "https://khaizter-where-in-the-world.netlify.app/",
    githubUrl: "https://github.com/khaizter/country-theme-switch",
    technologies: [
      { src: ReactIcon, name: "React" },
      { src: ReactRouterIcon, name: "React Router" },
      { src: StyledComponentsIcon, name: "Styled Components" },
      { src: RestIcon, name: "REST API" },
      { src: FramerMotionIcon, name: "Framer Motion" },
    ],
  },
  {
    images: [
      { src: SneakersScreenshot1, name: "Sneakers Ecommerce Screenshot 3" },
      { src: SneakersScreenshot2, name: "Sneakers Ecommerce Screenshot 1" },
      { src: SneakersScreenshot3, name: "Sneakers Ecommerce Screenshot 2" },
    ],
    title: "Sneakers Ecommerce",
    description: "A React Application using hooks and SASS",
    about: [
      "In this website I applied the things I learned in building responsive page and using React hooks, during development I also learned to build reusable components like image sliders, light box, counters from scratch. I also applied the things I learned from organizing the project structures like folders and also class name conventions using BEM methodology.",
    ],
    features: [
      "Adding and removing items from cart",
      "Viewing products via light box",
    ],
    demoUrl: "https://khaizter.github.io/ecommerce-product-page/",
    githubUrl: "https://github.com/khaizter/ecommerce-product-page",
    technologies: [
      { src: ReactIcon, name: "React" },
      { src: StyledComponentsIcon, name: "Styled Components" },
    ],
  },
];

export default projects;
