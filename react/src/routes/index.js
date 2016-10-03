import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import Layout from '../components/Layout';
import JumpIndex from '../components/JumpIndex';
import JumpNew from '../components/JumpNew';

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="/jumps" component={JumpIndex} />
      <Route path="/jumps/new" component={JumpNew} />
    </Route>
  </Router>
);

export default routes;
