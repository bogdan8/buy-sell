import React, {Component} from 'react';
import {connect} from 'react-redux';

import {removeUser, changeRole} from '../../actions/users.js';
import {UserList} from '../common';

class User extends Component {

  handleClickRemoveUser(index) {
    if (confirm("Ви дійсно хочите видалити?")) {
      this.props._removeUser(index);
      alert("Видалено!")
    } else {
      alert("Відмінено")
    }
  }

  handleClickChangeRole(id, role) {
    var paramsUser = {
      id: id,
      role: role
    };
    if (confirm(`Зробити адміном? ${role}`)) {
      this.props._changeRole(paramsUser);
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
export default connect(
    state => ({
      users: state.users,
    }),
    dispatch => ({
      _removeUser: (indexUser) => {
        dispatch(removeUser(indexUser))
      },
      _changeRole: (valueUser) => {
        dispatch(changeRole(valueUser));
      }
    })
)(User)