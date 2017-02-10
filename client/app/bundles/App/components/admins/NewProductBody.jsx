import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable, TableHeader} from 'react-mdl';

import getVisibleProducts from '../../selectors/getVisibleProducts';

import {removeProduct, payProduct, stateProduct} from '../../actions/products.js';

class NewProductBody extends Component {

  handleClickRemoveProduct(index) {
    if (confirm("Ви дійсно хочите видалити?")) {
      this.props._removeProduct(index);
      alert("Видалено!")
    } else {
      alert("Відмінено")
    }
  }

  handleClickPayProduct(index) {
    if (confirm("Ви дійсно хочите підтвердити оплачений продукт?")) {
      this.props._payProduct(index);
      alert("Підтверджено!")
    } else {
      alert("Відмінено")
    }
  }

  handleClickChangeState(id, boolean) {
    if (confirm("Затвердити продукт?")) {
      var paramsProduct = {
        id: id,
        approved: boolean
      };
      this.props._stateProduct(paramsProduct);
      alert("Затвердити!")
    } else {
      alert("Відмінено")
    }
  }

  render() {
    const {products, prepaidProducts} = this.props;
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
      let actionBlock = (product) => {
        return (
            <div>
              <p className="td-thead-title">Дія</p>
              <a onClick={() => {
                this.handleClickChangeState(product.id, true)
              }}>
                <i className={ product.approved ? "fa fa-thumbs-o-up active-i" : "fa fa-thumbs-o-up"}
                   aria-hidden="true"
                />
              </a>
              <a onClick={() => {
                this.handleClickChangeState(product.id, false)
              }}>
                <i className={ product.approved == false ? "fa fa-thumbs-o-down active-i" : "fa fa-thumbs-o-down"}
                   aria-hidden="true"/>
              </a>
              <a onClick={() => {
                product.approved ? this.handleClickPayProduct(product.id) : ''
              }}>
                <i className={ prepaidProducts.includes(product.id) ? "fa fa-money active-i" : "fa fa-money" }
                   aria-hidden="true"/>
              </a>
              <a onClick={() => {
                this.handleClickRemoveProduct(index)
              }}>
                <i className="fa fa-trash" aria-hidden="true"/>
              </a>
            </div>
        )
      };
      return {
        photo: photoBlock(product),
        description: descriptionBlock(product),
        contact: contactBlock(product),
        price: priceBlock(product),
        action: actionBlock(product, prepaidProducts),
        className: active,
      }
    });
    return (
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
              width="50%"
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
              width="5%"
              className="table-thead"
          >
            Ціна
          </TableHeader>
          <TableHeader
              name="action"
              tooltip="Дії"
              scope="col"
              data-tablesaw-priority="5"
              data-tablesaw-sortable-col
              width="15%"
              className="table-thead"
          >
            Дії
          </TableHeader>
        </DataTable>
    );
  }
}
export default connect(
    state => ({
      products: getVisibleProducts(state),
      prepaidProducts: state.prepaidProducts
    }),
    dispatch => ({
      _removeProduct: (indexProduct) => {
        dispatch(removeProduct(indexProduct))
      },
      _payProduct: (indexProduct) => {
        dispatch(payProduct(indexProduct))
      },
      _stateProduct: (paramsProduct) => {
        dispatch(stateProduct(paramsProduct))
      }
    })
)(NewProductBody)