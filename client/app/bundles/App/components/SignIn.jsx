import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class SignIn extends React.Component {
  constructor (props) {
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
                      <input className="mdl-textfield__input form-input" required="required" type="text" name="email"
                             id="email" value={this.state.credentials.email} onChange={this.onChange} />
                      <label className="mdl-textfield__label form-label" htmlFor="email">Електрона
                        Почта</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                      <input className="mdl-textfield__input form-input" required="required" type="password" name="password"
                             id="password" value={this.state.credentials.password} onChange={this.onChange} />
                      <label className="mdl-textfield__label form-label" htmlFor="password">Пароль</label>
                    </div>
                    <div className="flex-center">
                      <button type="submit" //was button
                              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.onSave}>
                        Ввійти
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignIn);