import React, {Component} from 'react';
import Routes from '../routes/Routes';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './style/App.sass'

import reducer from '../reducers/rootReducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Routes />
        </Provider>
    );
  }
}