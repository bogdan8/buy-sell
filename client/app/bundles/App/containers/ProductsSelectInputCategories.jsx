import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Cell} from 'react-mdl';

import * as categoryActions from '../actions/categoryActions';

import '../components/style/Product.sass';

class ProductsSelectInputCategories extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickSelect(e) {
    let currentCategoryParams = {
      id: e.target.getAttribute('data-id-value'),
      name: e.target.innerHTML
    };
    this.props.actions.currentCategory(currentCategoryParams);
  };

  render() {
    const {currentCategory, categories} = this.props;
    return (
        <Cell col={12}>
          <div className="body-header-title flex-center">
            <div
                className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth select-input">
              <input className="mdl-textfield__input" type="text" id="list_category"
                     value={currentCategory.name ? currentCategory.name : 'Всі'}
                     readOnly
                     tabIndex="-1"
                     name="list_category"
              />
              <label htmlFor="list_category" className="mdl-textfield__label">Виберіть рубрику</label>
              <ul id="select" htmlFor="list_category" className="mdl-menu mdl-js-menu full-width"
                  onClick={this.handleClickSelect.bind(this)}>
                <li id="list_category_li" key="0" data-id-value="0"
                    className="mdl-menu__item full-width">
                  Всі
                </li>
                { categories.map((category, index) =>
                    <li id="list_category_li" key={index} data-id-value={category.id}
                        className="mdl-menu__item full-width">
                      {category.name}
                    </li>
                )}
              </ul>
            </div>
          </div>
        </Cell>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.currentCategory,
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelectInputCategories);