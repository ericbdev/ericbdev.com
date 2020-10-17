import React from 'react';
import App from './App';
import GlobalStyle from './GlobalStyle';

function SiteRoot() {
  return (
    <>
      <GlobalStyle />
      <div id="site-root">
        <App />
      </div>
    </>
  );
}

export default SiteRoot;
