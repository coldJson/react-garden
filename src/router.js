import React from 'react';
import HomePage from './pages/home/index';
import GoBang from './pages/gobang/index';
import Tools from './pages/tools/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory();

const routes = () => (
  <Router>
    <Route path="/" exact component={HomePage}></Route>
    <Route path="/gobang" component={GoBang}></Route>
    <Route path="/tools" component={Tools}></Route>
  </Router>
);

export default routes;
