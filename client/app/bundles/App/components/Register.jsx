import React from 'react';
import {Link} from 'react-router';
import {Grid, Cell, Button, Textfield} from 'react-mdl';

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
                  <Cell col={6} tablet={4} phone={6} className="form-with-border">
                    <Textfield
                        type="text"
                        name="name"
                        label="Ім'я в системі"
                        floatingLabel
                        id="name"
                    />
                    <Textfield
                        type="email"
                        name="email"
                        label="Електронна адреса"
                        floatingLabel
                        id="email"
                        required
                    />
                    <Textfield
                        type="password"
                        name="password"
                        label="Пароль"
                        floatingLabel
                        id="password"
                        required
                    />
                    <Textfield
                        type="password"
                        name="repeat_password"
                        label="Повторіть пароль"
                        floatingLabel
                        id="repeat_password"
                        required
                    />
                    <Textfield
                        type="number"
                        name="phone"
                        label="Номер Телефону"
                        floatingLabel
                        id="phone"
                    />
                    <Textfield
                        name="address"
                        label="Адреса"
                        floatingLabel
                        id="address"
                        rows={5}
                    />
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