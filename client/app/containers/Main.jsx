import React from 'react';
import {browserHistory} from 'react-router';
import {Menu, Notification} from '../components';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    browserHistory.push('/products');
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