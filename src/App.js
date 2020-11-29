import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';

import { SELECTORS_MAIN } from './config/domSelectors';
import layers from './styles/layers';

// No heavy containers
import Header from './containers/Header';

// Lazy load routes
const Home = lazy(() => import('./routes/Home'));
const FindingsIdeas = lazy(() => import('./routes/FindingsIdeas'));

const MainLayout = styled.main`
  position: relative;
  z-index: ${layers.main};
  height: 100%;
  width: 100%;
`;

const Main = ({ children }) => (
  <>
    <Header />
    <MainLayout id={SELECTORS_MAIN.MAIN}>{children}</MainLayout>
  </>
);

// todo: put Header/masthead here
//
const App = props => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Main>
            <Route exact path="/" component={Home} />
            <Route path="/findings-ideas" component={FindingsIdeas} />
          </Main>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
