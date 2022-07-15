import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color : ${(props) => props.theme.primaryText}
  }

  h1,h2,h3 {
    margin-top: 0;
    margin: 0;
  }

  p {
    margin-top: 0;
    margin: 0;
  }

  a , button {
    color: inherit;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
