import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Cell, DataTable, TableHeader} from 'react-mdl';

import {removeUser, changeRole} from '../../actions/users.js';
import {Pagination} from '../common';

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
            <a onClick={() => {
              this.handleClickChangeRole(user.id, 'admin')
            }}>
              <i className={ user.role === 'admin' ? "fa fa-user-secret active-i" : "fa fa-user-secret"}
                 aria-hidden="true"/>
            </a>
            <a onClick={() => {
              this.handleClickChangeRole(user.id, 'user')
            }}>
              <i className={ user.role === 'user' ? "fa fa-user active-i" : "fa fa-user"}
                 aria-hidden="true"/>
            </a>
            <a onClick={() => {
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
        <Grid>
          <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
            <Grid>
              <Cell col={12}>
                <div className="body-header-title">
                  <p>Таблиця користувачів:</p>
                </div>
              </Cell>
              <Cell col={12}>
                <DataTable
                    className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
                    data-tablesaw-mode="stack"
                    rows={mappedUsers}
                >
                  <TableHeader
                      name="email"
                      tooltip="Електронна Адреса"
                      scope="col"
                      data-tablesaw-priority="1"
                      data-tablesaw-sortable-col
                      width="45%"
                      className="table-thead"
                  >
                    Електронна Адреса
                  </TableHeader>
                  <TableHeader
                      name="contact"
                      tooltip="Контактні дані"
                      scope="col"
                      data-tablesaw-priority="2"
                      data-tablesaw-sortable-col
                      width="40%"
                      className="table-thead"
                  >
                    Контактні дані
                  </TableHeader>
                  <TableHeader
                      name="action"
                      tooltip="Дії"
                      scope="col"
                      data-tablesaw-priority="3"
                      data-tablesaw-sortable-col
                      width="200px"
                      className="table-thead"
                  >
                    Дії
                  </TableHeader>
                </DataTable>
              </Cell>
              <Pagination/>
            </Grid>
          </Cell>
        </Grid>
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