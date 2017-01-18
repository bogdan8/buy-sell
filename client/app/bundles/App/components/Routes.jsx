import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Login from './Login';
import Admin from './Admin'
import Register from './Register'

export default function Routes() {
  return (
    <Router history = {hashHistory} >
      <Route path="/" component={ Login } >
        <Route path="/admin" component={ Admin } />
        <Route path="/register" component={ Register } />
      </Route>
    </Router>
  );
}
