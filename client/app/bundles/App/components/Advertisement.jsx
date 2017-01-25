import React from 'react';
import {Link} from 'react-router';

import './style/Advertisement.sass';

export default class Advertisement extends React.Component {
  componentDidMount() {
    let modal = document.getElementById('modal-advertisement');
    let btn = document.getElementById("add-advertisement");
    let span = document.getElementsByClassName("modal-button-close")[0];
    btn.onclick = function () {
      modal.style.display = "block";
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    componentHandler.upgradeDom();

  }

  render() {
    return (
        <div className="body">
          <div className="mdl-grid">
            <div
                className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col">
                  <div className="body-header-title flex-center">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <select id="[ID]" name="[NAME]" className="mdl-textfield__input">
                        <option value=""/>
                        <option value="1">Електроніка</option>
                        <option value="2">Дивани</option>
                      </select>
                      <label className="mdl-textfield__label" htmlFor="[ID]">Виберіть рубрику</label>
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
                    <tr>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Фото</p>
                        <div className="advertisement-image">
                          <img
                              src="https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg"
                              alt=""/>
                        </div>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Оголошення</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                          page when
                          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content here, content here', making it look like
                          readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                          their
                          default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                          infancy.
                          Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                          (injected
                          humour and the like).</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Контакти</p>
                        <p>John Lennon</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Ціна</p>
                        <p>$454</p>
                      </td>
                    </tr>
                    <tr className="active-tr">
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Фото</p>
                        <div className="advertisement-image">
                          <img
                              src="https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg"
                              alt=""/>
                        </div>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Оголошення</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                          page when
                          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content here, content here', making it look like
                          readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                          their
                          default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                          infancy.
                          Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                          (injected
                          humour and the like).</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Контакти</p>
                        <p>Paul McCartney</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Ціна</p>
                        <p>$454</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Фото</p>
                        <div className="advertisement-image">
                          <img
                              src="https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg"
                              alt=""/>
                        </div>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Оголошення</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                          page when
                          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content here, content here', making it look like
                          readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                          their
                          default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                          infancy.
                          Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                          (injected
                          humour and the like).</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Контакти</p>
                        <p>George Harrison</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Ціна</p>
                        <p>$454</p>
                      </td>
                    </tr>
                    <tr className="active-tr">
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Фото</p>
                        <div className="advertisement-image">
                          <img
                              src="https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg"
                              alt=""/>
                        </div>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric td-block-height-auto">
                        <p className="td-thead-title">Оголошення</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                          page when
                          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content here, content here', making it look like
                          readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                          their
                          default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                          infancy.
                          Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                          (injected
                          humour and the like).</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Контакти</p>
                        <p>Ringo Starr</p>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">
                        <p className="td-thead-title">Ціна</p>
                        <p>$454</p>
                      </td>
                    </tr>
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
                  <button id="add-advertisement" data-modal="#modal"
                          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    <i className="fa fa-plus-circle" aria-hidden="true"/> Додати Власне оголошення
                  </button>
                </div>
                <div id="modal-advertisement" className="modal-block">
                  <div className="modal modal__bg" role="dialog" aria-hidden="true">
                    <div className="modal__dialog">
                      <div className="modal__content">
                        <h4>Створити нове оголошення:</h4>
                        <form action="#" className="auth-block-grid">
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
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <select id="[id]" name="[name]" required="required" className="mdl-textfield__input">
                                  <option value=""/>
                                  <option value="1">Електроніка</option>
                                  <option value="2">Дивани</option>
                                </select>
                                <label className="mdl-textfield__label" htmlFor="[ID]">Виберіть рубрику</label>
                              </div>
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <textarea className="mdl-textfield__input form-input" name="[advertisement]" type="text"
                                          rows={5} id="sample5" defaultValue={""}/>
                                <label className="mdl-textfield__label form-label" htmlFor="sample3">Текст
                                  оголошення</label>
                              </div>
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input form-input" required="required" name="[number]"
                                       type="number" id="sample3"/>
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
                        <span className="modal__close modal-button-close">
                          <i className="fa fa-times" aria-hidden="true"/>
                        </span>
                      </div>
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