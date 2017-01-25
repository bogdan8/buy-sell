import React from 'react';
import {Link} from 'react-router';

export default class SignIn extends React.Component {
  componentDidMount(){
    componentHandler.upgradeDom();
  }
  render() {
    return (
        <div className="body">
          <div className="mdl-grid">
            <div
                className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
              <div className="body-auth">
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--12-col">
                    <div className="auth-link">
                      <p>Ввійти</p>
                      <p>|</p>
                      <Link to="/register">Зареєструватись</Link>
                    </div>
                  </div>
                </div>
                <div className="mdl-grid auth-block-grid">
                  <div className="mdl-cell mdl-cell--12-col">
                    <form action="#" className="form-sign-in">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input form-input" required="required" type="text"
                               id="sample3"/>
                        <label className="mdl-textfield__label form-label" htmlFor="sample3">Електрона
                          Почта</label>
                      </div>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input form-input" required="required" type="text"
                               id="sample3"/>
                        <label className="mdl-textfield__label form-label" htmlFor="sample3">Пароль</label>
                      </div>
                      <div className="flex-center">
                        <button type="submit"
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                          Ввійти
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}