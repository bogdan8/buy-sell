import React from 'react';
import {Link} from 'react-router';

import './style/Auth.sass';

export default class Register extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }

  render() {
    return (
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="body-auth">
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col">
                  <div className="auth-link">
                    <Link to="/sign_in">Ввійти</Link>
                    <p>|</p>
                    <p>Зареєструватись</p>
                  </div>
                </div>
              </div>
              <form action="#" className="auth-block-grid">
                <div className="mdl-grid">
                  <div
                      className="mdl-cell mdl-cell--5-col-desktop mdl-cell--1-offset-desktop mdl-cell--4-col-tablet mdl-cell--6-col-phone">
                    <div className="form-image">
                      <label className="fileContainer">
                        <i className="fa fa-download" aria-hidden="true"/>
                        <input type="file"/>
                      </label>
                    </div>
                  </div>
                  <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--6-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input form-input" type="text" id="sample3"/>
                      <label className="mdl-textfield__label form-label" htmlFor="sample3">
                        Ім'я в системі</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input form-input" required="required" type="text"
                             id="sample3"/>
                      <label className="mdl-textfield__label form-label" htmlFor="sample3">
                        Електронна адреса</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input form-input" required="required" type="text"
                             id="sample3"/>
                      <label className="mdl-textfield__label form-label" htmlFor="sample3">
                        Пароль</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input form-input" required="required" type="text"
                             id="sample3"/>
                      <label className="mdl-textfield__label form-label" htmlFor="sample3">
                        Повторіть пароль</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input form-input" required="required" type="text"
                             id="sample3"/>
                      <label className="mdl-textfield__label form-label" htmlFor="sample3">
                        Номер телефону</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <textarea className="mdl-textfield__input form-input" type="text" rows={5} id="sample5"
                                defaultValue={""}/>
                      <label className="mdl-textfield__label form-label" htmlFor="sample3">
                        Адреса</label>
                    </div>
                  </div>
                </div>
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--12-col flex-center">
                    <button type="submit"
                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                      Зареєструватись
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}