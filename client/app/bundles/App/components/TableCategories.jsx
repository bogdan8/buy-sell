import React from 'react';
import {Link} from 'react-router';

export default class TableCategories extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickShowModalWindow() {
    document.getElementById('modal-category').style.display = "block";
  };

  handleClickHideModalWindow() {
    document.getElementById('modal-category').style.display = "none";
  }

  render() {
    return (
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="body-header-title">
                  <p>Таблиця Рубрик:</p>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <table className="tablesaw tablesaw-stack mdl-data-table mdl-js-data-table admin-table"
                       data-tablesaw-mode="stack">
                  <thead className="table-thead">
                  <tr>
                    <th scope="col" data-tablesaw-priority="1" data-tablesaw-sortable-col width="90%">Назва рубрики
                    </th>
                    <th scope="col" data-tablesaw-priority="2" data-tablesaw-sortable-col width="10%">Дії</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="mdl-data-table__cell--non-numeric">
                      <p className="td-thead-title">Назва рубрики</p>
                      <p>John Lennon</p>
                    </td>
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a href=""><i className="fa fa-pencil" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
                    </td>
                  </tr>
                  <tr className="active-tr">
                    <td className="mdl-data-table__cell--non-numeric">
                      <p className="td-thead-title">Назва рубрики</p>
                      <p>Paul McCartney</p>
                    </td>
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a href=""><i className="fa fa-pencil" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="mdl-data-table__cell--non-numeric">
                      <p className="td-thead-title">Назва рубрики</p>
                      <p>George Harrison</p>
                    </td>
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a href=""><i className="fa fa-pencil" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
                    </td>
                  </tr>
                  <tr className="active-tr">
                    <td className="mdl-data-table__cell--non-numeric">
                      <p className="td-thead-title">Назва рубрики</p>
                      <p>Ringo Starr</p>
                    </td>
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a href=""><i className="fa fa-pencil" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
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
                      <form action="#">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input className="mdl-textfield__input" type="text" id="sample3"/>
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
          </div>
        </div>
    )
  }
}