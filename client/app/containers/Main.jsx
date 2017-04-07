import React from 'react';
import {Menu, Notification} from '../components';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <div className="body">
          <Menu/>
          {this.props.children}
        </div>
        <Notification/>
      </div>
    );
  }
}