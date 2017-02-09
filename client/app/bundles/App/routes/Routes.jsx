import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import {connect} from 'react-redux';

import {Main, Admin, SignIn, Register, Products, User, Categories, NewProducts} from '../components/common'

function Routes(props) {
  if (props.user.role === 'admin') {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={ Main }>
            <Route path="/admin" component={ Admin }/>
            <Route path="/sign_in" component={ SignIn }/>
            <Route path="/logout" component={ SignIn }/>
            <Route path="/register" component={ Register }/>
            <Route path="/products" component={ Products }/>
            <Route path="/admin/user" component={ User }/>
            <Route path="/admin/categories" component={ Categories }/>
            <Route path="/admin/new_products" component={ NewProducts }/>
          </Route>
        </Router>
    )
  } else {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={ Main }>
            <Route path="/sign_in" component={ SignIn }/>
            <Route path="/register" component={ Register }/>
            <Route path="/products" component={ Products }/>
          </Route>
        </Router>
    )
  }
}
export default connect(
    state => ({
      user: state.users[0],
      logged_in: state.session
    })
)(Routes);