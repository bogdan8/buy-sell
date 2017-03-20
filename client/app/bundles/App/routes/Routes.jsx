import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import {connect} from 'react-redux';

import {Main, Admin, SignIn, Register, Products} from '../components'
import {User, Categories, NewProducts} from '../components/admin'

const adminRoutes = (
    <Route path="/" component={ Main }>
      <Route path="/admin" component={ Admin }/>
      <Route path="/sign_in" component={ SignIn }/>
      <Route path="/register" component={ Register }/>
      <Route path="/products" component={ Products }/>
      <Route path="/admin/user" component={ User }/>
      <Route path="/admin/categories" component={ Categories }/>
      <Route path="/admin/new_products" component={ NewProducts }/>
    </Route>
);

const userRoutes = (
    <Route path="/" component={ Main }>
      <Route path="/sign_in" component={ SignIn }/>
      <Route path="/register" component={ Register }/>
      <Route path="/products" component={ Products }/>
    </Route>
);

function Routes(props) {
  //if (props.user.role_id === 'admin') {
    return (
        <Router history={browserHistory}>
          {adminRoutes}
        </Router>
    )
  /*} else {
    return (
        <Router history={browserHistory}>
          {userRoutes}
        </Router>
    )
  }*/
}
export default connect(
    state => ({
      user: state.users[0]
    })
)(Routes);