import React, {Component} from 'react';
import Pagination from '../Pagination';

import {connect} from 'react-redux';

class User extends Component {

  handleClickRemoveUser(index) {
    if (confirm("Ви дійсно хочите видалити?")) {
      this.props.removeUser(index);
      alert("Видалено!")
    } else {
      alert("Відмінено")
    }
  }

  render() {
    const {users} = this.props;
    return (
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="body-header-title">
                  <p>Таблиця користувачів:</p>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
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
                          <a href=""><i className="fa fa-user-secret" aria-hidden="true"/></a>
                          <a href=""><i className="fa fa-user" aria-hidden="true"/></a>
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
              </div>
              <Pagination/>
            </div>
          </div>
        </div>
    );
  }
}
export default connect(
    state => ({
      users: state.users,
    }),
    dispatch => ({
      removeUser: (indexUser) => {
        dispatch({
          type: 'REMOVE_USER',
          indexUser: indexUser
        });
      }
    })
)(User)