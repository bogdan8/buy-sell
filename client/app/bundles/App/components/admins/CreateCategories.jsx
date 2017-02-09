import React, {Component}from 'react';
import {connect} from 'react-redux';
import {v4} from 'node-uuid';
import {Cell, Button} from 'react-mdl';

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
        <Cell col={12} className="flex-center">
          <Cell col={12} className="flex-center">
            <Button raised ripple
                    data-modal="#modal"
                    onClick={this.handleClickShowModalWindow}
            >
              <i className="fa fa-plus-circle" aria-hidden="true"/> Додати Рубрику
            </Button>
          </Cell>
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
                      <Button raised ripple
                              type="submit"
                      >
                        <i className="fa fa-plus-circle" aria-hidden="true"/> Додати
                      </Button>
                    </div>
                  </form>
                  <span className="modal__close modal-button-close" onClick={this.handleClickHideModalWindow}>
                          <i className="fa fa-times" aria-hidden="true"/>
                        </span>
                </div>
              </div>
            </div>
          </div>
        </Cell>
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
