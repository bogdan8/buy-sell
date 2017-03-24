import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AuthorizedComponent} from 'react-router-role-authorization';

import * as userActions from '../../actions/userActions';

import {UserList} from '../../components/admin';

class User extends AuthorizedComponent {
  constructor(props) {
    super(props);

    this.userRoles = [props.user.role];
    this.notAuthorizedPath = '/';
  }

  handleUnauthorizedRole(routeRoles, userRoles) {
    const {router} = this.context;
    router.push('/');
  }

  handleClickRemoveUser(index) {
    if (confirm("Ви дійсно хочите видалити?")) {
      this.props.actions.removeUser(index);
      alert("Видалено!")
    } else {
      alert("Відмінено")
    }
  }

  handleClickChangeRole(id, role) { // change role in user (admin or user)
    let paramsUser = {
      id: id,
      role: role
    };
    if (confirm(`Зробити ${role}?`)) {
      this.props.actions.changeRole(paramsUser);
      alert(`Зроблено ${role}!`)
    } else {
      alert("Відмінено")
    }
  }

  render() {
    const {users} = this.props;
    const userAction = (user, index) => {
      return (
        <div>
          <a id="to_admin" onClick={() => {
            this.handleClickChangeRole(user.id, 'admin')
          }}>
            <i className={ user.role === 'admin' ? "fa fa-user-secret active-i" : "fa fa-user-secret"}
               aria-hidden="true"/>
          </a>
          <a id="to_user" onClick={() => {
            this.handleClickChangeRole(user.id, 'user')
          }}>
            <i className={ user.role === 'user' ? "fa fa-user active-i" : "fa fa-user"}
               aria-hidden="true"/>
          </a>
          <a id="remove_user" onClick={() => {
            this.handleClickRemoveUser(index)
          }}>
            <i className="fa fa-trash" aria-hidden="true"/>
          </a>
        </div>
      )
    };
    const mappedUsers = users.map((user, index) => {
      let active = ((index % 2) ? "active-tr" : "");
      let emailBlock = (user) => {
        return (
          <div>
            <p className="td-thead-title">Електронна Адреса</p>
            <p>{user.email}</p>
          </div>
        )
      };
      let contactBlock = (user) => {
        return (
          <div>
            <p className="td-thead-title">Контактні дані</p>
            <p>{user.contacts}</p>
          </div>
        )
      };
      return {
        email: emailBlock(user),
        contact: contactBlock(user),
        action: userAction(user, index),
        className: active,
      }
    });
    return (
      <UserList mappedUsers={mappedUsers}/>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);