import React from 'react';
import {connect} from 'react-redux';
import {FABButton} from 'react-mdl';

import {AdminMenu, UserMenu} from '../components';

import '../components/style/Header.sass'

function Menu(props) {
  return (
    <div>
      <div className="header flex-center">
        <div className="header-title">
          <p>Фіртка</p>
        </div>
      </div>
      <div className="header-nav">
        <FABButton ripple
                   id="demo-menu-lower-right"
        >
          <i className="fa fa-user" aria-hidden="true"/>
        </FABButton>
        {/* {props.user.role_id === 'admin' ? <AdminMenu /> : <UserMenu />}*/}
        <AdminMenu />
      </div>
    </div>
  );
}
export default connect(
  state => ({
    user: state.users[0]
  })
)(Menu);