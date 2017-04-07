import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Cell, Button, Textfield} from 'react-mdl';
import Dropzone from 'react-dropzone';

import * as productActions from '../actions/productActions';

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { // state initializes the image to get a image that is chosen for create product window
      image: new Image()
    };
  };

  handleClickSelectModal(e) { // select chose category and insert data-id-value for create product
    document.getElementById('select-category').value = e.target.innerHTML;
    document.getElementById('select-category').setAttribute('data-id-value', e.target.getAttribute('data-id-value'));
  };

  handleClickShowModalWindow() {
    document.getElementById('modal-product').style.display = "block";
    document.getElementById("form_create_product").reset();
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-product').style.display = "none";
  };

  handleSubmit(e) { // submit form create product
    e.preventDefault();
    if (document.getElementById('select-category').value != 'Рубрики:') {
      let description = document.getElementById('description').value;
      let price = document.getElementById('price').value;
      let category_id = document.getElementById('select-category').getAttribute('data-id-value');

      let paramsProduct = {
        image: this.state.image,
        text: description,
        user_id: this.props.user.id,
        category_id: category_id,
        price: price
      };

      this.props.actions.addProduct(paramsProduct);
      document.getElementById('modal-product').style.display = "none";
      document.getElementById("upload-img").innerHTML = '';
      this.setState({
        image: ''
      });
    } else {
      alert('Виберіть рубрику');
    }
  };

  onDrop(images) { // select image from modal window and set image in state
    this.setState({
      image: images[0]
    });
    document.getElementById("upload-img").innerHTML = `<img height="100%" width="100%" src=${images[0].preview} />`
  }

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
                <form id="form_create_product" onSubmit={this.handleSubmit.bind(this)}
                      className="auth-block-grid form-with-border">
                  <Grid>
                    <Cell col={5} offsetDesktop={1} tablet={4} phone={6}>
                      <div className="form-image">
                        <Dropzone multiple={false}
                                  className="fileContainer-block"
                                  onDrop={this.onDrop.bind(this)}>
                          <div id="upload-img" className="upload-img"></div>
                          <i className="fa fa-download" aria-hidden="true"/>
                        </Dropzone>
                      </div>
                    </Cell>
                    <Cell col={6} tablet={4} phone={6}>
                      <div
                        className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth select-input">
                        <input className="mdl-textfield__input" type="text" id="select-category"
                               value={'Рубрики:'}
                               readOnly
                               tabIndex="-1"/>
                        <label htmlFor="select-category" className="mdl-textfield__label">Виберіть рубрику</label>
                        <ul id="selectModal" htmlFor="select-category" className="mdl-menu mdl-js-menu full-width"
                            onClick={this.handleClickSelectModal.bind(this)}>
                          { categories.filter(category => category.name != 'Всі').map((category, index) =>
                            <li id="category_li" key={category.id} data-id-value={category.id}
                                className="mdl-menu__item full-width">{category.name}</li>
                          )}
                        </ul>
                      </div>
                      <Textfield
                        name="description"
                        label="Текст оголошення *"
                        floatingLabel
                        id="description"
                        rows={5}
                        pattern=".{10,}"
                        title="10 символів мінімум"
                      />
                      <Textfield
                        type="number"
                        name="price"
                        label="Вартість *"
                        floatingLabel
                        id="price"
                        pattern=".{1,}"
                        title="1 символів мінімум"
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

function mapStateToProps(state) {
  return {
    categories: state.categories,
    user: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);