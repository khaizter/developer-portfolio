import GlobalStyle from "./globals/GlobalStyle";
import Hero from "./pages/hero";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Header from "./common/header";
import { light } from "./globals/Themes";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Header />
      <GlobalStyle />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
