import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Cell} from 'react-mdl';

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
                <table className="tablesaw tablesaw-stack mdl-data-table mdl-js-data-table admin-table"
                       data-tablesaw-mode="stack">
                  <thead className="table-thead">
                  <tr>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority={1} width="45%">Електронна
                      Адреса
                    </th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority={2} width="40%">Контактні дані
                    </th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority={3} width="200px">Дії</th>
                  </tr>
                  </thead>
                  <tbody>
                  { users.map((user, index) =>
                      <tr key={user.id} className={(index % 2) ? "active-tr" : ""}>
                        <td className="mdl-data-table__cell--non-numeric table-right-columns">
                          <p className="td-thead-title">Електронна Адреса</p>
                          <p>{user.email}</p>
                        </td>
                        <td className="mdl-data-table__cell--non-numeric table-right-columns">
                          <p className="td-thead-title">Контактні дані</p>
                          <p>{user.contacts}</p>
                        </td>
                        <td className="mdl-data-table__cell--non-numeric admin-user-action">
                          <p className="td-thead-title">Дія</p>
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
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
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