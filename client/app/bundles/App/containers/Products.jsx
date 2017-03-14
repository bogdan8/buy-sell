import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Cell} from 'react-mdl';
import {Pagination, ProductList, CreateProduct, ProductsSelectInputCategories} from '../components'

import * as productActions from '../actions/productActions';
import * as categoryActions from '../actions/categoryActions';

import '../components/style/Product.sass';

class Products extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  };

  render() {
    const {prepaidProducts, currentCategory, filterProducts} = this.props;

    /* get product with chose currnet category */
    let products = ((!currentCategory.name || currentCategory.name === 'Всі' ) ? this.props.products : filterProducts);

    /* get prepaid products */
    const with_prepaid = products.filter(product =>
      (prepaidProducts.filter(prepaid => prepaid.product_id.includes(product.id)).length > 0) ? prepaidProducts.filter(prepaid => prepaid.product_id.includes(product.id)) : false
    );

    /* get not prepaid products */
    const no_prepaid = products.filter(product =>
      (prepaidProducts.filter(prepaid => prepaid.product_id.includes(product.id)).length <= 0)
    );

    /* concat all product, to products which were prepaid and which were not prepaid at the end */
    const all_product = with_prepaid.concat(no_prepaid);

    /* map product for put in table */
    const mappedProducts = all_product.map((product, index) => {
      if (prepaidProducts.filter(prepaid => prepaid.product_id.includes(product.id)).length > 0) {
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
            <ProductList mappedProducts={mappedProducts}/>
            <Pagination />
            <CreateProduct />
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
    filterProducts: state.products.filter(product => product.category_id.includes(state.currentCategory.id) && product.approved), // filter product with chose category
    prepaidProducts: state.prepaidProducts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...productActions, ...categoryActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);