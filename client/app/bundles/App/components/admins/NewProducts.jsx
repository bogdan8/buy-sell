import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Cell} from 'react-mdl';

import {NewProductBody} from '../common';

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
        <Grid>
          <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
            <Grid>
              <Cell col={12}>
                <Cell col={12} className="body-header-title new-products">
                  <Grid>
                    <Cell col={5} tablet={12} phone={12}>
                      <p>Нові Оголошення:</p>
                    </Cell>
                    <Cell col={7} tablet={12} phone={12} className="checkbox-block">
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
                    </Cell>
                  </Grid>
                </Cell>
              </Cell>
              <Cell col={12}>
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
              </Cell>
            </Grid>
          </Cell>
        </Grid>
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