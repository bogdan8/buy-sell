import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Routes from '../routes/Routes';
import reducer from '../reducers/rootReducer';

import './style/App.sass'
import 'react-mdl/extra/material.js';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Routes />
        </Provider>
    );
  }
}