import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Menu, MenuItem} from 'react-mdl';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as sessionActions from '../actions/sessionActions';

class AdminMenu extends Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    return (
      <Menu
        align="right"
        target="demo-menu-lower-right"
        ripple
      >
        <MenuItem>
          <Link onClick={this.logOut}>
            Вийти
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products">
            Оголошення
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/admin/user">
            Таблиця користувачів
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/admin/categories">
            Таблиця рубрик
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/admin/new_products">
            Нові оголошення
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

export default connect(null, mapDispatchToProps)(AdminMenu);
