import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h3>Here comes login</h3>
        {this.props.children}
      </div>
    );
  }
}