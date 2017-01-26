import React from 'react';

import Menu from './Menu';

import './style/Auth.sass';

export default class Login extends React.Component {
  render() {
    return (
        <div className="body">
          <Menu/>
          {this.props.children}
        </div>
    );
  }
}