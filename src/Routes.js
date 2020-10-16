import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './containers/Sidebar';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const FindingsIdeas = lazy(() => import('./routes/FindingsIdeas'));

// todo: put sidebar/masthead here
export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/findings-ideas" component={FindingsIdeas} />
      </Switch>
    </Suspense>
  </Router>
);
