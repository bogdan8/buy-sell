import React, {Component}from 'react';
import {connect} from 'react-redux';
import {Grid, Cell} from 'react-mdl';

import {Pagination, ProductList, CreateProduct} from '../components'
import {currentCategory} from '../actions/categories.js';

import '../components/style/Product.sass';

class Products extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickSelect(e) {
    this.props._getCategory(e.target.innerHTML);
  };

  render() {
    const {prepaidProducts, currentCategory, categories, filterProducts} = this.props;

    let products = (currentCategory === 'Всі' ? this.props.products : filterProducts);
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
        <Grid>
          <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
            <Grid>
              <Cell col={12}>
                <div className="body-header-title flex-center">
                  <div
                      className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth select-input">
                    <input className="mdl-textfield__input" type="text" id="list_category"
                           value={currentCategory === '' ? 'Всі' : currentCategory}
                           readOnly
                           tabIndex="-1"
                           name="list_category"
                    />
                    <label htmlFor="list_category" className="mdl-textfield__label">Виберіть рубрику</label>
                    <ul id="select" htmlFor="list_category" className="mdl-menu mdl-js-menu full-width"
                        onClick={this.handleClickSelect.bind(this)}>
                      { categories.map((category, index) =>
                          <li id="list_category_li" key={category.id} value={category.id}
                              className="mdl-menu__item full-width">{category.name}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </Cell>
              <ProductList mappedProducts={mappedProducts}/>
              <Pagination />
              <CreateProduct />
            </Grid>
          </Cell>
        </Grid>
    )
  }
}

export default connect(
    state => ({
      products: state.products.filter(product => product.approved),
      categories: state.categories,
      currentCategory: state.currentCategory,
      filterProducts: state.products.filter(product => product.category.includes(state.currentCategory) && product.approved),
      prepaidProducts: state.prepaidProducts
    }),
    dispatch => ({
      _getCategory: (categoryName) => {
        dispatch(currentCategory(categoryName))
      }
    })
)(Products);