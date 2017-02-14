import React from 'react';

import {Menu} from '../components';

import '../components/style/Auth.sass';

export default class Main extends React.Component {
  render() {
    return (
        <div className="body">
          <Menu/>
          {this.props.children}
        </div>
    );
  }
}