import React, {Component}from 'react';
import {connect} from 'react-redux';
import {v4} from 'node-uuid';
import {Grid, Cell, Button, Textfield} from 'react-mdl';

import {addProduct} from '../actions/products.js';

class CreateProduct extends Component {
  constructor(props) {
    super(props);
  };

  handleClickSelectModal(e) {
    document.getElementById('select-category').value = e.target.innerHTML;
  };

  handleClickShowModalWindow() {
    document.getElementById('modal-product').style.display = "block";
    document.getElementById("form_create_product").reset();
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-product').style.display = "none";
  };

  handleSubmit(e) {
    e.preventDefault();
    var paramsProduct = {
      id: v4(),
      photo: 'http://www.cruzo.net/user/images/k/ecc3ecf42c75db1ffce5d06cbe95b1e6_644.jpg',
      description: document.getElementById('description').value,
      contact: 'Bobo bobo',
      category: document.getElementById('select-category').value,
      price: document.getElementById('price').value,
      approved: false
    };

    this.props._addProduct(paramsProduct);
    document.getElementById('modal-product').style.display = "none";

    alert('Успішно додано');
  };

  render() {
    const {categories} = this.props;
    return (
        <Cell col={12} className="flex-center">
          <Button raised ripple
                  id="add-product"
                  data-modal="#modal"
                  onClick={this.handleClickShowModalWindow}
          >
            <i className="fa fa-plus-circle" aria-hidden="true"/> Додати Власне оголошення
          </Button>
          <div id="modal-product" className="modal-block">
            <div className="modal modal__bg" role="dialog" aria-hidden="true">
              <div className="modal__dialog">
                <div className="modal__content">
                  <h4>Створити нове оголошення:</h4>
                  <form id="form_create_product" onSubmit={this.handleSubmit.bind(this)} className="auth-block-grid form-with-border">
                    <Grid>
                      <Cell col={5} offsetDesktop={1} tablet={4} phone={6}>
                        <div className="form-image">
                          <label className="fileContainer-block">
                            <i className="fa fa-download" aria-hidden="true"/>
                            <input name="[file]" type="file"/>
                          </label>
                        </div>
                      </Cell>
                      <Cell col={6} tablet={4} phone={6}>
                        <div
                            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth select-input">
                          <input className="mdl-textfield__input" type="text" id="select-category"
                                 value={'Всі'}
                                 readOnly
                                 tabIndex="-1"/>
                          <label htmlFor="select-category" className="mdl-textfield__label">Виберіть рубрику</label>
                          <ul id="selectModal" htmlFor="select-category" className="mdl-menu mdl-js-menu full-width"
                              onClick={this.handleClickSelectModal.bind(this)}>
                            { categories.map((category, index) =>
                                <li id="category_li" key={category.id} value={category.id}
                                    className="mdl-menu__item full-width">{category.name}</li>
                            )}
                          </ul>
                        </div>
                        <Textfield
                            name="description"
                            label="Текст оголошення"
                            floatingLabel
                            id="description"
                            rows={5}
                            required
                        />
                        <Textfield
                            type="number"
                            name="price"
                            label="Вартість"
                            floatingLabel
                            id="price"
                            required
                        />
                      </Cell>
                    </Grid>
                    <Grid>
                      <Cell col={12} className="flex-center">
                        <Button raised ripple
                                type="submit"
                        >
                          <i className="fa fa-paper-plane-o" aria-hidden="true"/> Надіслати на підтвердження
                        </Button>
                      </Cell>
                    </Grid>
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
    state => ({
      categories: state.categories,
    }),
    dispatch => ({
      _addProduct: (paramsProduct) => {
        dispatch(addProduct(paramsProduct))
      }
    })
)(CreateProduct);