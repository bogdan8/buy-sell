import React from 'react'
import {connect} from 'react-redux';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

import {Main, SignIn, Register, Products} from '../components';
import {User, Categories, AdminProducts} from '../components/admin';

function Routes(props) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={ Main }>
        <Route path="/sign_in" component={ SignIn }/>
        <Route path="/register" component={ Register }/>
        <Route path="/products" component={ Products }/>
        <Route authorize={'admin'} path="/admin/user" component={ User }/>
        <Route authorize={'admin'} path="/admin/categories" component={ Categories }/>
        <Route authorize={'admin'} path="/admin/products" component={ AdminProducts }/>
      </Route>
    </Router>
  )
}

export default connect(
  state => ({
    user: state.session
  })
)(Routes);