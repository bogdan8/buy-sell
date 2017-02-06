import React, {Component} from 'react';

import NewProductBody from './NewProductBody';

import '../style/Product.sass';

export default class NewProduct extends Component {
  render() {
    return (
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="body-header-title">
                  <p>Нові Оголошення:</p>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <table className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
                       data-tablesaw-mode="stack">
                  <thead className="table-thead">
                  <tr>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1" width="15%">Фото</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2" width="50%">Оголошення</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="3" width="15%">Контакти</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4" width="5%">Ціна</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="5" width="15%">Дії</th>
                  </tr>
                  </thead>
                  <NewProductBody />
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}