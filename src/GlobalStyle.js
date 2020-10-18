import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 16px;
    line-height: 1.6;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
