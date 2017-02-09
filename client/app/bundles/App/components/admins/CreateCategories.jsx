import React, {Component}from 'react';
import {connect} from 'react-redux';
import { v4 } from 'node-uuid';

import {addCategory} from '../../actions/categories.js';

class CreateCategories extends Component {
  handleClickShowModalWindow() {
    document.getElementById('modal-category').style.display = "block";
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-category').style.display = "none";
  };

  handleSubmit(e) {
    e.preventDefault();
    var paramsCategory = {
      id: v4(),
      name: document.getElementById('category').value
    };

    this.props._addCategory(paramsCategory);
    document.getElementById('modal-category').style.display = "none";

    alert('Успішно дадано');
  };

  render() {
    return (
        <div className="mdl-cell mdl-cell--12-col flex-center">
          <div className="mdl-cell mdl-cell--12-col flex-center">
            <button data-modal="#modal" onClick={this.handleClickShowModalWindow}
                    className="modal__trigger mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <i className="fa fa-plus-circle" aria-hidden="true"/> Додати Рубрику
            </button>
          </div>
          <div id="modal-category" className="modal-block">
            <div className="modal modal__bg" role="dialog" aria-hidden="true">
              <div className="modal__dialog">
                <div className="modal__content">
                  <h4>Додати нову рубрику:</h4>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input" type="text" id="category"/>
                      <label className="mdl-textfield__label" htmlFor="sample3">Назва нової рубрики:</label>
                    </div>
                    <div className="flex-center">
                      <button type="submit"
                              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                        <i className="fa fa-plus-circle" aria-hidden="true"/> Додати
                      </button>
                    </div>
                  </form>
                  <span className="modal__close modal-button-close" onClick={this.handleClickHideModalWindow}>
                          <i className="fa fa-times" aria-hidden="true"/>
                        </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default connect(
    state => ({}),
    dispatch => ({
      _addCategory: (paramsCategory) => {
        dispatch(addCategory(paramsCategory))
      }
    })
)(CreateCategories);
