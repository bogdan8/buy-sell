import React, {Component} from 'react';
import {connect} from 'react-redux';

import {NewProductBody} from './adminComponents';

import {setAdminFilterOption} from '../../actions/adminFilterOption.js';

import '../style/Product.sass';

class NewProduct extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  };

  handleClickSelect(e) {
    this.props._setAdminFilterOption(e.target.id, e.target.checked);
  };

  render() {
    return (
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="mdl-cell mdl-cell--12-col body-header-title new-products">
                  <div className="mdl-grid">
                    <div className="mdl-cell--5-col-desktop mdl-cell mdl-cell--12-col-tablet mdl-cell--12-col-phone">
                      <p>Нові Оголошення:</p>
                    </div>
                    <div
                        className="mdl-cell--7-col-desktop mdl-cell mdl-cell--12-col-tablet mdl-cell--12-col-phone checkbox-block">
                      <div>
                        <p>Затверджені</p>
                        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect " htmlFor="approved">
                          <input type="checkbox" id="approved" className="mdl-switch__input"
                                 onChange={this.handleClickSelect.bind(this)}/>
                          <span className="mdl-switch__label"/>
                        </label>
                      </div>
                      <div>
                        <p>Відхилені</p>
                        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="deflected">
                          <input type="checkbox" id="deflected" className="mdl-switch__input"
                                 onChange={this.handleClickSelect.bind(this)}/>
                          <span className="mdl-switch__label"/>
                        </label>
                      </div>
                      <div>
                        <p>Оплачені</p>
                        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="prepaid">
                          <input type="checkbox" id="prepaid" className="mdl-switch__input"
                                 onChange={this.handleClickSelect.bind(this)}/>
                          <span className="mdl-switch__label"/>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <table className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
                       data-tablesaw-mode="stack">
                  <thead className="table-thead">
                  <tr>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1" width="15%">Фото</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2" width="50%">Оголошення</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="3" width="15%">Контакти</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4" width="5%">Ціна</th>
                    <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="5" width="15%">Дії</th>
                  </tr>
                  </thead>
                  <NewProductBody/>
                </table>
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
      _setAdminFilterOption: (name, isChecked) => {
        dispatch(setAdminFilterOption(name, isChecked))
      }
    })
)(NewProduct)