import React from 'react';
import {Link} from 'react-router';

import './style/Advertisement.sass';

export default function SignIn() {
  return (
      <div className="body">
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="body-header-title">
                  <p>Нові Оголошення:</p>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <table className="tablesaw tablesaw-stack mdl-data-table mdl-js-data-table admin-table"
                       data-tablesaw-mode="stack">
                  <thead className="table-thead">
                  <tr>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1" width="15%">Фото</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2" width="55%">Оголошення</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="3" width="15%">Контакти</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4" width="5%">Ціна</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="5" width="10%">Дії</th>
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
                    <td className="mdl-data-table__cell--non-numeric table-right-columns td-block-height-auto">
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
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a href=""><i className="fa fa-thumbs-o-up" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-thumbs-o-down" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
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
                    <td className="mdl-data-table__cell--non-numeric table-right-columns td-block-height-auto">
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
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a href=""><i className="fa fa-thumbs-o-up" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-thumbs-o-down" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
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
                    <td className="mdl-data-table__cell--non-numeric table-right-columns td-block-height-auto">
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
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a href=""><i className="fa fa-thumbs-o-up" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-thumbs-o-down" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
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
                    <td className="mdl-data-table__cell--non-numeric table-right-columns td-block-height-auto">
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
                    <td className="mdl-data-table__cell--non-numeric admin-user-action">
                      <p className="td-thead-title">Дія</p>
                      <a href=""><i className="fa fa-thumbs-o-up" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-thumbs-o-down" aria-hidden="true"/></a>
                      <a href=""><i className="fa fa-trash" aria-hidden="true"/></a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}