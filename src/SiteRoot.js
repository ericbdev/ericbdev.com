import React from 'react';
import Routes from './Routes';
import GlobalStyle from './GlobalStyle';

function SiteRoot() {
  return (
    <>
      <GlobalStyle />
      <div id="site-root">
        <Routes />
      </div>
    </>
  );
}

export default SiteRoot;
