import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Cell} from 'react-mdl';
import {
  Pagination,
  ProductList,
  CreateProduct,
  ProductsSelectInputCategories,
  ProductsSelectCountPagination
} from '../components';

import * as productActions from '../actions/productActions';
import * as categoryActions from '../actions/categoryActions';

import '../components/style/Product.sass';

class Products extends Component {
  componentWillMount() {
    this.props.actions.allCategories();
  };

  render() {
    const {currentCategory, pagination, products} = this.props;
    /* get product with chose current category */
    const mappedProducts = products.map((product, index) => {
      if (product.prepaid_products.length > 0) {
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
          <div className="product-user-information">
            <p className="td-thead-title">Контакти</p>
            <p>
              <i className="fa fa-phone" aria-hidden="true"/>
              {product.user.telephone}
            </p>
            <p>
              <a href="#" data-modal="#modal"
                 onClick={() => document.getElementById(`modal-user-${product.id}`).style.display = "block"}>
                <i className="fa fa-address-card" aria-hidden="true"/>
                Детальніше:
              </a>
            </p>
            <div id={`modal-user-${product.id}`} className="modal-block">
              <div className="modal modal__bg" role="dialog" aria-hidden="true">
                <div className="modal__dialog">
                  <div className="modal__content">
                    <h4>Інформація про користувача:</h4>
                    <Grid className="product-user-modal">
                      <Cell col={6}>
                        <img width={150} height={150}
                             src={`/system/users/avatars/${product.user.id}/original/${product.user.avatar_file_name}`}/>
                      </Cell>
                      <Cell col={6} className="product-user-modal-information">
                        <p>
                          <i className="fa fa-user-circle" aria-hidden="true"/>
                          {product.user.username}
                        </p>
                        <p>
                          <i className="fa fa-phone" aria-hidden="true"/>
                          {product.user.telephone}
                        </p>
                        <p>
                          <i className="fa fa-envelope-open" aria-hidden="true"/>
                          {product.user.email}
                        </p>
                        <p>
                          <i className="fa fa-map-marker" aria-hidden="true"/>

                          {product.user.location}
                        </p>
                      </Cell>
                    </Grid>
                    <span className="modal__close modal-button-close"
                          onClick={() => document.getElementById(`modal-user-${product.id}`).style.display = "none"}>
                      <i className="fa fa-times" aria-hidden="true"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
      <Grid>
        <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
          <Grid>
            <ProductsSelectInputCategories />
            <ProductsSelectCountPagination grid_col={6}/>
            <ProductList mappedProducts={mappedProducts}/>
            <ProductsSelectCountPagination grid_col={12}/>
            <Pagination entity='products'
                        query={currentCategory.id ? `category_id=${currentCategory.id}&per=${pagination.per}` : `per=${pagination.per}`}/>
            {this.props.user.id != undefined ? <CreateProduct /> : '' }
          </Grid>
        </Cell>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.filter(product => product.approved),
    currentCategory: state.currentCategory,
    user: state.session,
    pagination: state.pagination
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...productActions, ...categoryActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);