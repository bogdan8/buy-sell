import React, {Component} from 'react';
import {connect} from 'react-redux';

import CreateCategories from './CreateCategories';

class Categories extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    componentHandler.upgradeDom();
  };

  render() {
    return (
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="body-header-title">
                  <p>Таблиця Рубрик:</p>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <table className="tablesaw tablesaw-stack mdl-data-table mdl-js-data-table admin-table"
                       data-tablesaw-mode="stack">
                  <thead className="table-thead">
                  <tr>
                    <th scope="col" data-tablesaw-priority="1" data-tablesaw-sortable-col width="90%">Назва рубрики
                    </th>
                    <th scope="col" data-tablesaw-priority="2" data-tablesaw-sortable-col width="10%">Дії</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.props.categories.map((items, index) =>
                      <tr key={items.id} className={(index % 2) ? "active-tr" : ""}>
                        <td className="mdl-data-table__cell--non-numeric">
                          <p className="td-thead-title">Назва рубрики</p>
                          <p>{items.name}</p>
                        </td>
                        <td className="mdl-data-table__cell--non-numeric admin-user-action">
                          <p className="td-thead-title">Дія</p>
                          <a href=""><i className="fa fa-pencil" aria-hidden="true"/></a>
                          <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
              <CreateCategories />
            </div>
          </div>
        </div>
    )
  }
}
export default connect(
    state => ({
      categories: state.categories
    })
)(Categories);
