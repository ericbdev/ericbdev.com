import React from 'react';
import styled from 'styled-components';

import App from './App';
import GlobalStyle from './GlobalStyle';
import { SELECTORS_MAIN } from './config/domSelectors';

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
`;

const PortalWrapper = styled(Wrapper)`
  position: absolute;
  z-index: 200;
  top: 0;
`;

function SiteRoot() {
  return (
    <>
      <GlobalStyle />
      <Wrapper id={SELECTORS_MAIN.SITE_ROOT} zIndex={100}>
        <App />
      </Wrapper>
      <PortalWrapper
        id={SELECTORS_MAIN.SITE_PORTAL}
      />
    </>
  );
}

export default SiteRoot;
