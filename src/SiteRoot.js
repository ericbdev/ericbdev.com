import React from 'react';
import styled from 'styled-components';

import App from './App';
import GlobalStyle from './GlobalStyle';
import { SELECTORS_MAIN } from './config/domSelectors';

const Wrapper = styled.div``;
const PortalWrapper = styled(Wrapper)``;

function SiteRoot() {
  return (
    <>
      <GlobalStyle />
      <Wrapper id={SELECTORS_MAIN.SITE_ROOT}>
        <App />
      </Wrapper>
      <PortalWrapper id={SELECTORS_MAIN.SITE_PORTAL} />
    </>
  );
}

export default SiteRoot;
