import React from 'react';
import {Link} from 'react-router';
import {Grid, Cell, Button} from 'react-mdl';

import './style/Auth.sass';

export default class Register extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }

  render() {
    return (
        <Grid>
          <Cell col={6} offsetDesktop={3} tablet={12} phone={12}>
            <div className="body-auth">
              <Grid>
                <Cell col={12}>
                  <div className="auth-link">
                    <Link to="/sign_in">Ввійти</Link>
                    <p>|</p>
                    <p>Зареєструватись</p>
                  </div>
                </Cell>
              </Grid>
              <form action="#" className="auth-block-grid">
                <Grid>
                  <Cell col={5} offsetDesktop={1} tablet={4} phone={6}>
                    <div className="form-image">
                      <label className="fileContainer">
                        <i className="fa fa-download" aria-hidden="true"/>
                        <input type="file"/>
                      </label>
                    </div>
                  </Cell>
                  <Cell col={6} tablet={4} phone={6}>
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
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={12} className="flex-center">
                    <Button raised ripple
                            type="submit"
                    >
                      Зареєструватись
                    </Button>
                  </Cell>
                </Grid>
              </form>
            </div>
          </Cell>
        </Grid>
    )
  }
}