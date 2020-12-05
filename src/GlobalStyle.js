import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';

import { SELECTORS_MAIN } from './config/domSelectors';

import typography from './styles/typography';

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
    font-family: ${typography.font.families.body};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  #${SELECTORS_MAIN.ROOT} { position: relative; z-index: 100; }
  #${SELECTORS_MAIN.SITE_ROOT} { position: relative; z-index: 100; }
  #${SELECTORS_MAIN.SITE_PORTAL} { position: absolute; top: 0; z-index: 200; }
`;

export default GlobalStyle;
