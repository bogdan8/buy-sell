import React from 'react';
import {Link} from 'react-router';

import './style/Advertisement.sass';

const CATEGORIES = [
  {
    id: 1,
    name: 'Кіно'
  },
  {
    id: 2,
    name: 'Музика'
  },
  {
    id: 3,
    name: 'Ігри'
  }
];

var data = [
  {
    id: 1,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'John Lennon',
    category: 'Кіно',
    price: '4568$'
  }, {
    id: 2,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'John Lennon',
    category: 'Музика',
    price: '4568$'
  }, {
    id: 3,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'John Lennon',
    category: 'Кіно',
    price: '4568$'
  }, {
    id: 4,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'Paul McCartney',
    category: 'Ігри',
    price: '4568$'
  }, {
    id: 5,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'John Lennon',
    category: 'Кіно',
    price: '4568$'
  }, {
    id: 6,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'George Harrison',
    category: 'Ігри',
    price: '4568$'
  }, {
    id: 7,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'John Lennon',
    category: 'Музика',
    price: '4568$'
  }
];

export default class Advertisement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectName: 'Рубрика',
      selectNameModal: 'Рубрика',
      displayedData: data
    }
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickSelect(e) {
    this.setState({
      selectName: e.target.innerHTML,
      displayedData: data.filter(data => data.category.includes(e.target.innerHTML))
    });
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
    let category = document.getElementById('sample2').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    data.push({
      id: Date.now(),
      photo: 'http://www.cruzo.net/user/images/k/ecc3ecf42c75db1ffce5d06cbe95b1e6_644.jpg',
      description: description,
      contact: 'Bobo bobo',
      category: category,
      price: price
    });
    console.log(data);
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
              <div className="mdl-cell mdl-cell--12-col">
                <table className="tablesaw tablesaw-stack mdl-data-table mdl-js-data-table admin-table"
                       data-tablesaw-mode="stack">
                  <thead className="table-thead">
                  <tr>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1" width="15%">Фото</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2" width="60%">Оголошення</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="3" width="15%">Контакти</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4" width="10%">Ціна</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.state.displayedData.map((items, index) =>
                      <tr key={items.id} className={(index % 2) ? "active-tr" : ""}>
                        <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                          <p className="td-thead-title">Фото</p>
                          <div className="advertisement-image">
                            <img src={items.photo}/>
                          </div>
                        </td>
                        <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                          <p className="td-thead-title">Оголошення</p>
                          <p>{items.description}</p>
                        </td>
                        <td className="mdl-data-table__cell--non-numeric">
                          <p className="td-thead-title">Контакти</p>
                          <p>{items.contact}</p>
                        </td>
                        <td className="mdl-data-table__cell--non-numeric">
                          <p className="td-thead-title">Ціна</p>
                          <p>{items.price}</p>
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
              <div className="mdl-cell mdl-cell--12-col flex-center">
                <ul className="pagination flex-center">
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">Перша</a>
                  </li>
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">&lt;&lt;</a>
                  </li>
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">1</a>
                  </li>
                  <li className="active mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">2</a>
                  </li>
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">3</a>
                  </li>
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">4</a>
                  </li>
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">5</a>
                  </li>
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">6</a>
                  </li>
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">&gt;&gt;</a>
                  </li>
                  <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <a href="#">Остання</a>
                  </li>
                </ul>
              </div>
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
                              <input className="mdl-textfield__input" type="text" id="sample2"
                                     value={this.state.selectNameModal}
                                     readOnly
                                     tabIndex="-1"/>
                              <label htmlFor="sample2" className="mdl-textfield__label">Виберіть рубрику</label>
                              <ul id="selectModal" htmlFor="sample2" className="mdl-menu mdl-js-menu full-width"
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