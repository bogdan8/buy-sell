import React, {Component} from 'react';
import {connect} from 'react-redux';

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

  handleClickChangeState(id, state) {
    if (confirm("Затвердити продукт?")) {
      var paramsProduct = {
        id: id,
        state: state
      };
      this.props._stateProduct(paramsProduct);
      alert("Затвердити!")
    } else {
      alert("Відмінено")
    }
  }

  render() {
    const {products, prepaidProducts} = this.props;
    return (
        <tbody>
        { products.map((product, index) => {
          if (prepaidProducts.includes(product.id)) {
            return (
                <tr key={product.id}
                    className="active-prepaid">
                  <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                    <p className="td-thead-title">Фото</p>
                    <div className="product-image">
                      <img src={product.photo}/>
                    </div>
                  </td>
                  <td className="mdl-data-table__cell--non-numeric table-right-columns td-block-height-auto">
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
                  <td className="mdl-data-table__cell--non-numeric admin-user-action">
                    <p className="td-thead-title">Дія</p>
                    <a onClick={() => {
                      this.handleClickChangeState(product.id, 'approved')
                    }}>
                      <i className={ product.state == 'approved' ? "fa fa-thumbs-o-up active-i" : "fa fa-thumbs-o-up"}
                         aria-hidden="true"
                      />
                    </a>
                    <a onClick={() => {
                      this.handleClickChangeState(product.id, 'deflected')
                    }}>
                      <i className={ product.state == 'deflected' ? "fa fa-thumbs-o-down active-i" : "fa fa-thumbs-o-down"}
                         aria-hidden="true"/>
                    </a>
                    <a onClick={() => {
                      this.handleClickPayProduct(product.id)
                    }}>
                      <i className={ prepaidProducts.includes(product.id) ? "fa fa-money active-i" : "fa fa-money"}
                         aria-hidden="true"/>
                    </a>
                    <a onClick={() => {
                      this.handleClickRemoveProduct(index)
                    }}>
                      <i className="fa fa-trash" aria-hidden="true"/>
                    </a>
                  </td>
                </tr>
            )
          }
        })}
        { products.map((product, index) => {
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
                  <td className="mdl-data-table__cell--non-numeric table-right-columns td-block-height-auto">
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
                  <td className="mdl-data-table__cell--non-numeric admin-user-action">
                    <p className="td-thead-title">Дія</p>
                    <a onClick={() => {
                      this.handleClickChangeState(product.id, 'approved')
                    }}>
                      <i className={ product.state == 'approved' ? "fa fa-thumbs-o-up active-i" : "fa fa-thumbs-o-up"}
                         aria-hidden="true"
                      />
                    </a>
                    <a onClick={() => {
                      this.handleClickChangeState(product.id, 'deflected')
                    }}>
                      <i className={ product.state == 'deflected' ? "fa fa-thumbs-o-down active-i" : "fa fa-thumbs-o-down"}
                         aria-hidden="true"/>
                    </a>
                    <a onClick={() => {
                      this.handleClickPayProduct(product.id)
                    }}>
                      <i className={ prepaidProducts.includes(product.id) ? "fa fa-money active-i" : "fa fa-money"}
                         aria-hidden="true"/>
                    </a>
                    <a onClick={() => {
                      this.handleClickRemoveProduct(index)
                    }}>
                      <i className="fa fa-trash" aria-hidden="true"/>
                    </a>
                  </td>
                </tr>
            )
          }
        })}
        </tbody>

    );
  }
}
export default connect(
    state => ({
      products: state.products,
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