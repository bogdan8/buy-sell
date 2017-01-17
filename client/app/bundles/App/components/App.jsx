import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import { configure, authStateReducer } from 'redux-auth';

import Login from './Login';
class App extends Component {

  const reducer = combineReducers({
    auth: authStateReducer,
  });

  

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={ Login } />
      </Router>
    );
  }
}

export default App;