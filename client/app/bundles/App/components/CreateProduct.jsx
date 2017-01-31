import React, {Component}from 'react';
import {connect} from 'react-redux';

class CreateProduct extends Component {
  constructor(props) {
    super(props);
  };

  handleClickSelectModal(e) {
    this.props.choseCategoryInModal(e.target.innerHTML);
  };

  handleClickShowModalWindow() {
    document.getElementById('modal-product').style.display = "block";
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-product').style.display = "none";
  };

  handleSubmit(e) {
    e.preventDefault();
    var paramsProduct = {
      id: Date.now(),
      photo: 'http://www.cruzo.net/user/images/k/ecc3ecf42c75db1ffce5d06cbe95b1e6_644.jpg',
      description: document.getElementById('description').value,
      contact: 'Bobo bobo',
      category: document.getElementById('select-category').value,
      price: document.getElementById('price').value
    };

    this.props.choseCategoryInModal(document.getElementById('select-category').value);

    this.props.onAddProduct(paramsProduct);
    document.getElementById('modal-product').style.display = "none";

    alert('Успішно дадано');
  };

  render() {
    return (
        <div className="mdl-cell mdl-cell--12-col flex-center">
          <div className="mdl-cell mdl-cell--12-col flex-center">
            <button id="add-product" data-modal="#modal" onClick={this.handleClickShowModalWindow}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <i className="fa fa-plus-circle" aria-hidden="true"/> Додати Власне оголошення
            </button>
          </div>
          <div id="modal-product" className="modal-block">
            <div className="modal modal__bg" role="dialog" aria-hidden="true">
              <div className="modal__dialog">
                <div className="modal__content">
                  <h4>Створити нове оголошення:</h4>
                  <form onSubmit={this.handleSubmit.bind(this)} className="auth-block-grid">
                    <div className="mdl-grid">
                      <div
                          className="mdl-cell mdl-cell--5-col-desktop mdl-cell--1-offset-desktop mdl-cell--4-col-tablet mdl-cell--6-col-phone">
                        <div className="form-image">
                          <label className="fileContainer-block">
                            <i className="fa fa-download" aria-hidden="true"/>
                            <input name="[file]" type="file"/>
                          </label>
                        </div>
                      </div>
                      <div
                          className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--6-col-phone">
                        <div
                            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth select-input">
                          <input className="mdl-textfield__input" type="text" id="select-category"
                                 value={this.props.setCategoryInModal === '' ? 'Всі' : this.props.setCategoryInModal}
                                 readOnly
                                 tabIndex="-1"/>
                          <label htmlFor="select-category" className="mdl-textfield__label">Виберіть рубрику</label>
                          <ul id="selectModal" htmlFor="select-category" className="mdl-menu mdl-js-menu full-width"
                              onClick={this.handleClickSelectModal.bind(this)}>
                            { this.props.categories.map((items, index) =>
                                <li key={items.id} value={items.id}
                                    className="mdl-menu__item full-width">{items.name}</li>
                            )}
                          </ul>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <textarea className="mdl-textfield__input form-input" name="[product]" type="text"
                                          rows={5} id="description" defaultValue={""}/>
                          <label className="mdl-textfield__label form-label" htmlFor="sample3">Текст
                            оголошення</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input className="mdl-textfield__input form-input" required="required" name="[number]"
                                 type="number" id="price"/>
                          <label className="mdl-textfield__label form-label" htmlFor="sample3">Вартість</label>
                        </div>
                      </div>
                    </div>
                    <div className="mdl-grid">
                      <div className="mdl-cell mdl-cell--12-col flex-center">
                        <button type="submit"
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                          <i className="fa fa-paper-plane-o" aria-hidden="true"/> Надіслати на підтвердження
                        </button>
                      </div>
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
    state => ({
      products: state.products,
      categories: state.categories,
      setCategoryInModal: state.setCategoryInModal
    }),
    dispatch => ({
      onAddProduct: (items) => {
        dispatch({
          type: 'ADD_PRODUCT',
          data: items
        });
      },
      choseCategoryInModal: (items) => {
        dispatch({
          type: 'CHOSE_CATEGORY_IN_MODAL',
          data: items
        });
      }
    })
)(CreateProduct);