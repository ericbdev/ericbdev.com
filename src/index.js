import React from 'react';
import ReactDOM from 'react-dom';
import SiteRoot from './SiteRoot';
import * as serviceWorker from './serviceWorker';

import 'fontsource-roboto/400.css';
import 'fontsource-roboto/700.css';
import 'fontsource-open-sans/400.css';
import 'fontsource-open-sans/700.css';

ReactDOM.render(
  <React.StrictMode>
    <SiteRoot />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your SiteRoot to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
