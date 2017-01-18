import React, { Component } from 'react';

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import { configure, authStateReducer } from 'redux-auth';

import Routes from './Routes';

export default class App extends Component {

  getReducers() {
    return combineReducers({
      // auth: authStateReducer,
    });
  }

  render() {
    const reducers = this.getReducers();

    return (
        <Routes />
    );
  }
}