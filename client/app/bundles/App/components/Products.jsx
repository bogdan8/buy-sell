import React, {Component}from 'react';
import {connect} from 'react-redux';
import {Grid, Cell} from 'react-mdl';

import {Pagination, ProductBody, CreateProduct} from './common'
import {currentCategory} from '../actions/categories.js';

import './style/Product.sass';

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
    const {currentCategory, categories, products, filterProducts} = this.props;
    return (
        <Grid>
          <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
            <Grid>
              <Cell col={12}>
                <div className="body-header-title flex-center">
                  <div
                      className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth select-input">
                    <input className="mdl-textfield__input" type="text" id="sample1"
                           value={currentCategory === '' ? 'Всі' : currentCategory}
                           readOnly
                           tabIndex="-1"/>
                    <label htmlFor="sample1" className="mdl-textfield__label">Виберіть рубрику</label>
                    <ul id="select" htmlFor="sample1" className="mdl-menu mdl-js-menu full-width"
                        onClick={this.handleClickSelect.bind(this)}>
                      { categories.map((category, index) =>
                          <li key={category.id} value={category.id}
                              className="mdl-menu__item full-width">{category.name}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </Cell>
              <ProductBody
                  products={currentCategory === 'Всі' ? products : filterProducts}
              />
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