import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {AdminMenu, UserMenu} from './common';

import Register from './Register';

import './style/Header.sass'

function Menu(props) {
  return (
      <div>
        <div className="header flex-center">
          <div className="header-title">
            <p>Фіртка</p>
          </div>
        </div>
        <div className="header-nav">
          <button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
            <i className="fa fa-user" aria-hidden="true"/>
          </button>
          {props.user.role === 'admin' ? <AdminMenu /> : <UserMenu />}
        </div>
      </div>
  );
}
export default connect(
    state => ({
      user: state.users[0]
    })
)(Menu);