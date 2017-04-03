import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Cell} from 'react-mdl';

import * as paginationActions from '../actions/paginationActions';

class ProductsSelectCountPagination extends Component {
  componentWillMount() {
    setInterval(function () {
      componentHandler.upgradeDom();
    }, 200);

  };

  handleClickSelect(e) { // submit select with chose options
    document.getElementById('list_count').value = e.target.value;
    this.props.actions.fetchPagination('products', 1, `category_id=${this.props.currentCategory.id}&per=${e.target.value}`);
  };

  render() {
    return (
      <Cell col={this.props.grid_col}>
        <div className="body-header-title flex-center">
          <div
            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth select-input">
            <input className="mdl-textfield__input" type="text" id="list_count"
                   value={'15'}
                   readOnly
                   tabIndex="-1"
                   name="list_count"
            />
            <label htmlFor="list_count" className="mdl-textfield__label">Кількість оголошень на сторінці</label>
            <ul id="select" htmlFor="list_count" className="mdl-menu mdl-js-menu full-width"
                onClick={this.handleClickSelect.bind(this)}>
              { [5, 10, 15, 20, 25, 30, 50, 100].map((number) =>
                <li id="list_count_li" key={number} value={number}
                    className="mdl-menu__item full-width">
                  {number}
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
    currentCategory: state.currentCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(paginationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelectCountPagination);