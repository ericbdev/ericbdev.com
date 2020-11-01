import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';

// No heavy containers
import mixins from './styles/mixins';

// No heavy containers
import Header from './containers/Header';

// Lazy load routes
const Home = lazy(() => import('./routes/Home'));
const FindingsIdeas = lazy(() => import('./routes/FindingsIdeas'));

const Main = styled.main`
  ${mixins.layoutOuter};
`;

// todo: put Header/masthead here
//
export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Main id="site-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/findings-ideas" component={FindingsIdeas} />
        </Switch>
      </Main>
    </Suspense>
  </Router>
);
