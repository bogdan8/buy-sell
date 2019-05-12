import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as userActions from '../../actions/userActions'

import {UserList} from '../../components/admin'
import {Pagination} from '../../components'

class User extends Component {
  constructor(props) {
    super(props)

    // for check role is admin
    this.userRoles = [props.user.role]
    this.notAuthorizedPath = '/'
  }

  componentWillMount() {
    this.props.actions.allRoles() // get all user roles
    this.props.actions.allUsers() // get all users
  }

  handleUnauthorizedRole(routeRoles, userRoles) {
    const {router} = this.context
    router.push('/')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (JSON.stringify(nextProps.users) != JSON.stringify(this.props.users))
  }

  handleClickRemoveUser(index, user_id) {
    if (confirm("Ви дійсно хочите видалити?")) {
      this.props.actions.removeUser(index, user_id)
    }
  }

  handleClickChangeRole(id, role_id) { // change role in user (admin or user)
    let paramsUser = {
      id: id,
      role_id: role_id
    }
    this.props.actions.changeRole(paramsUser)
  }

  render() {
    const {users, user_roles} = this.props
    const userAction = (user, index) => {
      const role_admin = user_roles.find(role => (role.role_name == 'admin' ))
      const role_user = user_roles.find(role => (role.role_name == 'user' ))

      return (
        <div>
          <a id="to_admin" onClick={() => {
            this.handleClickChangeRole(user.id, role_admin.id)
          }}>
            <i
              className={ role_admin.id === user.role_id ? "fa fa-user-secret active-i" : "fa fa-user-secret"}
              aria-hidden="true"/>
          </a>
          <a id="to_user" onClick={() => {
            this.handleClickChangeRole(user.id, role_user.id)
          }}>
            <i className={ role_user.id === user.role_id ? "fa fa-user active-i" : "fa fa-user"}
               aria-hidden="true"/>
          </a>
          <a id="remove_user" onClick={() => {
            this.handleClickRemoveUser(index, user.id)
          }}>
            <i className="fa fa-trash" aria-hidden="true"/>
          </a>
        </div>
      )
    }
    const mappedUsers = users.map((user, index) => {
      let active = ((index % 2) ? "active-tr" : "")
      let emailBlock = (user) => {
        return (
          <div>
            <p className="td-thead-title">Електронна Адреса</p>
            <p>{user.email}</p>
          </div>
        )
      }
      let contactBlock = (user) => {
        return (
          <div>
            <p className="td-thead-title">Контактні дані</p>
            <div className="user-information">
              <div>
                {user.avatar_file_name && user.avatar_file_name != '' ?
                  <img width={150} height={150}
                       src={`/system/users/avatars/${user.id}/original/${user.avatar_file_name}`}/>
                  :
                  <img width={150} height={150} src='/missing/missing.png'/>
                }
              </div>
              <div>
                <p>Email: {user.email}</p>
                <p>Ім'я: {user.username}</p>
                <p>Телефон: {user.telephone}</p>
                <p>Адрес: {user.location}</p>
              </div>
            </div>
          </div>
        )
      }
      return {
        email: emailBlock(user),
        contact: contactBlock(user),
        action: userAction(user, index),
        className: active,
      }
    })
    return (
      <div>
        <UserList mappedUsers={mappedUsers}/>
        <Pagination entity='users'/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.session,
    user_roles: state.user_roles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
