import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Cell, DataTable, TableHeader} from 'react-mdl';

import './style/Product.sass';

class ProductBody extends Component {
  render() {
    const {products, prepaidProducts}= this.props;
    const mappedProducts = products.map((product, index) => {
      if (prepaidProducts.includes(product.id)) {
        var active = 'active-prepaid';
      } else {
        var active = ((index % 2) ? "active-tr hover-tr" : "hover-tr");
      }
      let photoBlock = (product) => {
        return (
            <div className="td-block-height-auto">
              <p className="td-thead-title">Фото</p>
              <div className="product-image">
                <img src={product.photo}/>
              </div>
            </div>
        )
      };
      let descriptionBlock = (product) => {
        return (
            <div className="td-block-height-auto">
              <p className="td-thead-title">Оголошення</p>
              <p>{product.description}</p>
            </div>
        )
      };
      let contactBlock = (product) => {
        return (
            <div>
              <p className="td-thead-title">Контакти</p>
              <p>{product.contact}</p>
            </div>
        )
      };
      let priceBlock = (product) => {
        return (
            <div>
              <p className="td-thead-title">Ціна</p>
              <p>{product.price}</p>
            </div>
        )
      };
      return {
        photo: photoBlock(product),
        description: descriptionBlock(product),
        contact: contactBlock(product),
        price: priceBlock(product),
        className: active,
      }
    });
    return (
        <Cell col={12}>
          <DataTable
              className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
              data-tablesaw-mode="stack"
              rows={mappedProducts}
          >
            <TableHeader
                name="photo"
                tooltip="Фото"
                scope="col"
                data-tablesaw-priority="1"
                data-tablesaw-sortable-col
                width="15%"
                className="table-thead"
            >
              Фото
            </TableHeader>
            <TableHeader
                name="description"
                tooltip="Оголошення"
                scope="col"
                data-tablesaw-priority="2"
                data-tablesaw-sortable-col
                width="60%"
                className="table-thead"
            >
              Оголошення
            </TableHeader>
            <TableHeader
                name="contact"
                tooltip="Контакти"
                scope="col"
                data-tablesaw-priority="3"
                data-tablesaw-sortable-col
                width="15%"
                className="table-thead"
            >
              Контакти
            </TableHeader>
            <TableHeader
                name="price"
                tooltip="Ціна"
                scope="col"
                data-tablesaw-priority="4"
                data-tablesaw-sortable-col
                width="10%"
                className="table-thead"
            >
              Ціна
            </TableHeader>
          </DataTable>
        </Cell>
    )
  }
}
export default connect(
    state => ({
      prepaidProducts: state.prepaidProducts
    })
)(ProductBody)