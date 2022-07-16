import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: 6.25rem;
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

  ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.accent}; 
}
`;

export default GlobalStyle;
