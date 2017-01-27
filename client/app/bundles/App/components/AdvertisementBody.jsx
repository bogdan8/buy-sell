import React from 'react';

import './style/Advertisement.sass';

export default class AdvertisementBody extends React.Component {
  render() {
    const {items}= this.props;
    return (
        <div className="mdl-cell mdl-cell--12-col">
          <table className="tablesaw tablesaw-stack mdl-data-table mdl-js-data-table admin-table"
                 data-tablesaw-mode="stack">
            <thead className="table-thead">
            <tr>
              <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1" width="15%">Фото</th>
              <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2" width="60%">Оголошення</th>
              <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="3" width="15%">Контакти</th>
              <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4" width="10%">Ціна</th>
            </tr>
            </thead>
            <tbody>
            { items.map((items, index) =>
                <tr key={items.id} className={(index % 2) ? "active-tr" : ""}>
                  <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                    <p className="td-thead-title">Фото</p>
                    <div className="advertisement-image">
                      <img src={items.photo}/>
                    </div>
                  </td>
                  <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                    <p className="td-thead-title">Оголошення</p>
                    <p>{items.description}</p>
                  </td>
                  <td className="mdl-data-table__cell--non-numeric">
                    <p className="td-thead-title">Контакти</p>
                    <p>{items.contact}</p>
                  </td>
                  <td className="mdl-data-table__cell--non-numeric">
                    <p className="td-thead-title">Ціна</p>
                    <p>{items.price}</p>
                  </td>
                </tr>
            )}
            </tbody>
          </table>
        </div>
    )
  }
}