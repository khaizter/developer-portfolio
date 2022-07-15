import GlobalStyle from "./globals/GlobalStyle";
import Header from "./common/header";
import Hero from "./pages/hero";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import { light, dark } from "./globals/Themes";
import { ThemeProvider } from "styled-components";
import { TbApi } from "react-icons/tb";
import { Card } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
