import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {Menu, MenuItem} from 'react-mdl';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as sessionActions from '../actions/sessionActions';

class UserMenu extends Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  checkIfUserSignIn() {
    if (this.props.user.id != undefined) {
      return <MenuItem>
        <Link onClick={this.logOut}>
          Вийти
        </Link>
      </MenuItem>
    } else {
      return <div>
        <MenuItem>
          <Link to="/sign_in">
            Ввійти
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/register">
            Зареєструватись
          </Link>
        </MenuItem>
      </div>
    }
  }

  render() {
    return (
      <Menu
        align="right"
        target="demo-menu-lower-right"
        ripple
      >
        {this.checkIfUserSignIn()}
        <MenuItem>
          <Link to="/products">
            Оголошення
          </Link>
        </MenuItem>
      </Menu>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {user: state.session};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
