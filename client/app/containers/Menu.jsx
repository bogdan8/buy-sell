import React from 'react';
import {connect} from 'react-redux';
import {FABButton} from 'react-mdl';

import {AdminMenu, UserMenu} from '../components';

function Menu(props) {
  return (
    <div>
      <div className="header flex-center">
        <div className="header-title">
          <a href="/">Фіртка</a>
        </div>
      </div>
      <div className="header-nav">
        <FABButton ripple
                   id="demo-menu-lower-right"
        >
          <i className="fa fa-user" aria-hidden="true"/>
        </FABButton>
        {props.user.role === 'admin' ? <AdminMenu /> : <UserMenu />}
      </div>
    </div>
  );
}
export default connect(
  state => ({
    user: state.session
  })
)(Menu);