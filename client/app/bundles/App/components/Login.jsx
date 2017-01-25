import React from 'react';

import Menu from './Menu';

import './style/Auth.sass';

export default class Login extends React.Component {
  render() {
    return (
        <bodu>
          <Menu/>
          {this.props.children}
        </bodu>
    );
  }
}