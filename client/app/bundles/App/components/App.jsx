import React, { Component } from 'react';

import { Provider } from 'react-redux';

import configureStore from '..containers/configureStore';

import Routes from '../routes/Routes';

export default class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}