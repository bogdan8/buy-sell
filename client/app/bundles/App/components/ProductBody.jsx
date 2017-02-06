import React, {Component} from 'react';
import {connect} from 'react-redux';

import './style/Product.sass';

class ProductBody extends Component {
  render() {
    const {products, prepaidProducts}= this.props;
    return (
        <div className="mdl-cell mdl-cell--12-col">
          <table className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
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
            { products.map((product) => {
              if (prepaidProducts.includes(product.id)) {
                return (
                    <tr key={product.id}
                        className={"active-prepaid"}>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Фото</p>
                        <div className="product-image">
                          <img src={product.photo}/>
                        </div>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Оголошення</p>
                        <p>{product.description}</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Контакти</p>
                        <p>{product.contact}</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Ціна</p>
                        <p>{product.price}</p>
                      </td>
                    </tr>
                )
              }
            })}
            { products.map((product) => {
              if (!prepaidProducts.includes(product.id)) {
                return (
                    <tr key={product.id}
                        className={(product.id % 2) ? "active-tr hover-tr" : "hover-tr"}>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Фото</p>
                        <div className="product-image">
                          <img src={product.photo}/>
                        </div>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Оголошення</p>
                        <p>{product.description}</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Контакти</p>
                        <p>{product.contact}</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Ціна</p>
                        <p>{product.price}</p>
                      </td>
                    </tr>
                )
              }
            })}
            </tbody>
          </table>
        </div>
    )
  }
}
export default connect(
    state => ({
      prepaidProducts: state.prepaidProducts
    })
)(ProductBody)