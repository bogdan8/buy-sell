import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../style/Product.sass';

class NewProduct extends Component {
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
                <table className="tablesaw tablesaw-stack mdl-data-table mdl-js-data-table admin-table"
                       data-tablesaw-mode="stack">
                  <thead className="table-thead">
                  <tr>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1" width="15%">Фото</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2" width="55%">Оголошення</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="3" width="15%">Контакти</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4" width="5%">Ціна</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="5" width="10%">Дії</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.props.products.map((items, index) =>
                      <tr key={items.id} className={(index % 2) ? "active-tr" : ""}>
                        <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                          <p className="td-thead-title">Фото</p>
                          <div className="product-image">
                            <img src={items.photo}/>
                          </div>
                        </td>
                        <td className="mdl-data-table__cell--non-numeric table-right-columns td-block-height-auto">
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
                        <td className="mdl-data-table__cell--non-numeric admin-user-action">
                          <p className="td-thead-title">Дія</p>
                          <a href=""><i className="fa fa-thumbs-o-up" aria-hidden="true"/></a>
                          <a href=""><i className="fa fa-thumbs-o-down" aria-hidden="true"/></a>
                          <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default connect(
    state => ({
      products: state.products,
    })
)(NewProduct)