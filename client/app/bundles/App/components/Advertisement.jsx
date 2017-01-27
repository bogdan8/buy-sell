import React from 'react';
import {connect} from 'react-redux';

import Pagination from './Pagination';
import AdvertisementBody from './AdvertisementBody';

import './style/Advertisement.sass';

const CATEGORIES = [
  {
    id: 1,
    name: 'Всі'
  },
  {
    id: 2,
    name: 'Кіно'
  },
  {
    id: 3,
    name: 'Музика'
  },
  {
    id: 4,
    name: 'Ігри'
  }
];

class Advertisement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectName: 'Всі',
      selectNameModal: 'Всі',
      displayedData: this.props.advertisements
    }
  };

  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickSelect(e) {
    var select = e.target.innerHTML;
    if (select === 'Всі') {
      this.setState({
        selectName: select,
        displayedData: this.props.advertisements
      });
    } else {
      this.setState({
        selectName: select,
        displayedData: this.props.advertisements.filter(data => data.category.includes(e.target.innerHTML))
      });
    }
  };

  handleClickSelectModal(e) {
    this.setState({
      selectNameModal: e.target.innerHTML,
    });
  };

  handleClickShowModalWindow() {
    document.getElementById('modal-advertisement').style.display = "block";
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-advertisement').style.display = "none";
  };

  handleSubmit(e) {
    e.preventDefault();
    var newAdvertisement = {
      id: Date.now(),
      photo: 'http://www.cruzo.net/user/images/k/ecc3ecf42c75db1ffce5d06cbe95b1e6_644.jpg',
      description: document.getElementById('description').value,
      contact: 'Bobo bobo',
      category: document.getElementById('select-category').value,
      price: document.getElementById('price').value
    };
    this.props.onAddAdvertisement(newAdvertisement);
    document.getElementById('modal-advertisement').style.display = "none";
    if (this.state.selectName === 'Всі') {
      this.setState({displayedData: this.props.advertisements});
    } else {
      this.setState({displayedData: this.props.advertisements.filter(data => data.category.includes(this.state.selectName))});
    }

    alert('Успішно дадано');
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
                    <input className="mdl-textfield__input" type="text" id="sample1" value={this.state.selectName}
                           readOnly
                           tabIndex="-1"/>
                    <label htmlFor="sample1" className="mdl-textfield__label">Виберіть рубрику</label>
                    <ul id="select" htmlFor="sample1" className="mdl-menu mdl-js-menu full-width"
                        onClick={this.handleClickSelect.bind(this)}>
                      { CATEGORIES.map((items, index) =>
                          <li key={items.id} value={items.id} className="mdl-menu__item full-width">{items.name}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <AdvertisementBody items={this.state.displayedData}/>
              <Pagination />
              <div className="mdl-cell mdl-cell--12-col flex-center">
                <button id="add-advertisement" data-modal="#modal" onClick={this.handleClickShowModalWindow}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                  <i className="fa fa-plus-circle" aria-hidden="true"/> Додати Власне оголошення
                </button>
              </div>
              <div id="modal-advertisement" className="modal-block">
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
                                     value={this.state.selectNameModal}
                                     readOnly
                                     tabIndex="-1"/>
                              <label htmlFor="select-category" className="mdl-textfield__label">Виберіть рубрику</label>
                              <ul id="selectModal" htmlFor="select-category" className="mdl-menu mdl-js-menu full-width"
                                  onClick={this.handleClickSelectModal.bind(this)}>
                                { CATEGORIES.map((items, index) =>
                                    <li key={items.id} value={items.id}
                                        className="mdl-menu__item full-width">{items.name}</li>
                                )}
                              </ul>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <textarea className="mdl-textfield__input form-input" name="[advertisement]" type="text"
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
          </div>
        </div>
    )
  }
}

export default connect(
    state => ({
      advertisements: state
    }),
    dispatch => ({
      onAddAdvertisement: (items) => {
        dispatch({
          type: 'ADD_ADVERTISEMENT',
          payload: items
        });
      }
    })
)(Advertisement);