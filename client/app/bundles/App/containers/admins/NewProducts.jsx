import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Cell, Switch} from 'react-mdl';

import * as productActions from '../../actions/productActions';

import {NewProductList} from '../../components/admin';
import getVisibleProducts from '../../selectors/getVisibleProducts';

import '../../components/style/Product.sass';

class NewProduct extends Component {
  componentWillMount() {
    this.props.actions.allProducts();
  };

  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickSelect(e) {
    this.props.actions.setAdminFilterOptionProducts(e.target.id, e.target.checked);
  };

  handleClickRemoveProduct(index) {
    if (confirm("Ви дійсно хочите видалити?")) {
      this.props.actions.removeProduct(index);
      alert("Видалено!")
    } else {
      alert("Відмінено")
    }
  }

  handleClickPayProduct(index) {
    if (confirm("Ви дійсно хочите підтвердити оплачений продукт?")) {
      this.props.actions.payProduct(index);
      alert("Підтверджено!")
    } else {
      alert("Відмінено")
    }
  }

  handleClickChangeState(id, boolean) {
    if (boolean ? confirm("Затвердити продукт?") : confirm("Не затвердити продукт?")) {
      let paramsProduct = {
        id: id,
        approved: boolean
      };
      this.props.actions.stateProduct(paramsProduct);
      boolean ? alert("Затверджений!") : alert("Не затверджений!")
    } else {
      alert("Відмінено")
    }
  }

  render() {
    const {products, prepaidProducts} = this.props;
    const with_prepaid = products.filter(product =>
      prepaidProducts.includes(product.id) ? prepaidProducts.includes(product.id) : false
    );
    const no_prepaid = products.filter(product =>
      !prepaidProducts.includes(product.id)
    );
    const all_product = with_prepaid.concat(no_prepaid);
    const mappedProducts = all_product.map((product, index) => {
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
              <img src={`/system/products/images/${product.id}/original/${product.image_file_name}`}/>
            </div>
          </div>
        )
      };
      let descriptionBlock = (product) => {
        return (
          <div className="td-block-height-auto">
            <p className="td-thead-title">Оголошення</p>
            <p>{product.text}</p>
          </div>
        )
      };
      let contactBlock = (product) => {
        return (
          <div>
            <p className="td-thead-title">Контакти</p>
            <p>{product.user_id}</p>
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
              !product.approved ? this.handleClickChangeState(product.id, true) : ''
            }}>
              <i className={ product.approved ? "fa fa-thumbs-o-up active-i" : "fa fa-thumbs-o-up"}
                 aria-hidden="true"
              />
            </a>
            <a id="no_approved" onClick={() => {
              product.approved ? this.handleClickChangeState(product.id, false) : ''
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

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state),
    prepaidProducts: state.prepaidProducts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);