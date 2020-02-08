import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    color: #393939;
    background: #fff;
  }
`;

export default GlobalStyle;
