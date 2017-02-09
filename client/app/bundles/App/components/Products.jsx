import React, {Component}from 'react';
import {connect} from 'react-redux';

import Pagination from './Pagination';
import ProductBody from './ProductBody';
import CreateProduct from './CreateProduct';
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
    return (
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="body-header-title flex-center">
                  <div
                      className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth select-input">
                    <input className="mdl-textfield__input" type="text" id="sample1"
                           value={this.props.currentCategory === '' ? 'Всі' : this.props.currentCategory}
                           readOnly
                           tabIndex="-1"/>
                    <label htmlFor="sample1" className="mdl-textfield__label">Виберіть рубрику</label>
                    <ul id="select" htmlFor="sample1" className="mdl-menu mdl-js-menu full-width"
                        onClick={this.handleClickSelect.bind(this)}>
                      { this.props.categories.map((category, index) =>
                          <li key={category.id} value={category.id}
                              className="mdl-menu__item full-width">{category.name}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <ProductBody
                  products={this.props.currentCategory === 'Всі' ? this.props.products : this.props.filterProducts}
              />
              <Pagination />
              <CreateProduct />
            </div>
          </div>
        </div>
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