import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {Grid, Cell, Button, Textfield} from 'react-mdl';
import Dropzone from 'react-dropzone';

import './style/Auth.sass';

import * as userActions from '../actions/userActions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // state initializes the image to get a image that is chosen for create product window
      image: new Image()
    };
  };

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  handleSubmit(e) { // submit form registration user
    e.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeat_password = document.getElementById('repeat_password').value;
    let telephone = document.getElementById('telephone').value;
    let location = document.getElementById('location').value;
    if (password === repeat_password) {
      let paramsUser = {
        avatar: this.state.image,
        username: username,
        email: email,
        password: password,
        repeat_password: repeat_password,
        telephone: telephone,
        location: location
      };
      this.props.actions.addUser(paramsUser);
    } else {
      alert('Ви ввели неоднакові паролі');
    }
  };

  onDrop(images) { // select image from modal window and set image in state
    this.setState({
      image: images[0]
    });
    document.getElementById("upload-img").innerHTML = `<img height="100%" width="100%" src=${images[0].preview} />`
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
            <form id="form_registration_user" onSubmit={this.handleSubmit.bind(this)}
                  className="auth-block-grid">
              <Grid>
                <Cell col={5} offsetDesktop={1} tablet={4} phone={6}>
                  <div className="form-image">
                    <Dropzone multiple={false}
                              className="fileContainer"
                              onDrop={this.onDrop.bind(this)}>
                      <div id="upload-img" className="upload-img"></div>
                      <i className="fa fa-download" aria-hidden="true"/>
                    </Dropzone>
                  </div>
                </Cell>
                <Cell col={6} tablet={4} phone={6} className="form-with-border">
                  <Textfield
                    type="text"
                    name="username"
                    label="Ім'я в системі"
                    floatingLabel
                    id="username"
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
                    name="telephone"
                    label="Номер Телефону"
                    floatingLabel
                    id="telephone"
                  />
                  <Textfield
                    name="location"
                    label="Адреса"
                    floatingLabel
                    id="location"
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Register);