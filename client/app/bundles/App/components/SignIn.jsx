import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid, Cell, Button} from 'react-mdl';

import * as sessionActions from '../actions/sessionActions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials})
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

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
                    <p>Ввійти</p>
                    <p>|</p>
                    <Link to="/register">Зареєструватись</Link>
                  </div>
                </Cell>
              </Grid>
              <Grid className="auth-block-grid">
                <Cell col={12}>
                  <form action="#" className="form-sign-in">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input form-input" required="required" type="text" name="email"
                             id="email" value={this.state.credentials.email} onChange={this.onChange}/>
                      <label className="mdl-textfield__label form-label" htmlFor="email">Електрона
                        Почта</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input form-input" required="required" type="password"
                             name="password"
                             id="password" value={this.state.credentials.password} onChange={this.onChange}/>
                      <label className="mdl-textfield__label form-label" htmlFor="password">Пароль</label>
                    </div>
                    <div className="flex-center">
                      <Button raised ripple
                              type="submit"
                              onClick={this.onSave}
                      >
                        Ввійти
                      </Button>
                    </div>
                  </form>
                </Cell>
              </Grid>
            </div>
          </Cell>
        </Grid>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignIn);