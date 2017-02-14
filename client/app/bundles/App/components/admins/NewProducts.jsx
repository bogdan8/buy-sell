import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Cell, Switch} from 'react-mdl';

import {NewProductList} from '../common';
import getVisibleProducts from '../../selectors/getVisibleProducts';
import {removeProduct, payProduct, stateProduct} from '../../actions/products.js';
import {setAdminFilterOption} from '../../actions/adminFilterOption.js';

import '../style/Product.sass';

class NewProduct extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickSelect(e) {
    this.props._setAdminFilterOption(e.target.id, e.target.checked);
  };

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
              <a id="is_approved" onClick={() => {
                this.handleClickChangeState(product.id, true)
              }}>
                <i className={ product.approved ? "fa fa-thumbs-o-up active-i" : "fa fa-thumbs-o-up"}
                   aria-hidden="true"
                />
              </a>
              <a id="no_approved" onClick={() => {
                this.handleClickChangeState(product.id, false)
              }}>
                <i className={ product.approved == false ? "fa fa-thumbs-o-down active-i" : "fa fa-thumbs-o-down"}
                   aria-hidden="true"/>
              </a>
              <a id="prepaid_product" onClick={() => {
                product.approved ? this.handleClickPayProduct(product.id) : ''
              }}>
                <i className={ prepaidProducts.includes(product.id) ? "fa fa-money active-i" : "fa fa-money" }
                   aria-hidden="true"/>
              </a>
              <a id="remove_product" onClick={() => {
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
        <Grid>
          <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
            <Grid>
              <Cell col={12}>
                <Cell col={12} className="body-header-title new-products">
                  <Grid>
                    <Cell col={5} tablet={12} phone={12}>
                      <p>Нові Оголошення:</p>
                    </Cell>
                    <Cell col={7} tablet={12} phone={12} className="checkbox-block">
                      <div>
                        <Switch onChange={this.handleClickSelect.bind(this)} id="approved">Затверджені</Switch>
                      </div>
                      <div>
                        <Switch onChange={this.handleClickSelect.bind(this)} id="deflected">Відхилені</Switch>
                      </div>
                      <div>
                        <Switch onChange={this.handleClickSelect.bind(this)} id="prepaid">Оплачені</Switch>
                      </div>
                    </Cell>
                  </Grid>
                </Cell>
              </Cell>
              <Cell col={12}>
                <NewProductList mappedProducts={mappedProducts}/>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
    )
  }
}
export default connect(
    state => ({
      products: getVisibleProducts(state),
      prepaidProducts: state.prepaidProducts
    }),
    dispatch => ({
      _setAdminFilterOption: (name, isChecked) => {
        dispatch(setAdminFilterOption(name, isChecked))
      },
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
)(NewProduct)