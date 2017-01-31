import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Login from '../components/Login';
import Admin from '../components/Admin';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import User from '../components/admins/User';
import Categories from '../components/admins/Categories';
import Products from '../components/Products';
import NewProducts from '../components/admins/NewProducts';

export default function Routes() {
  return (
    <Router history = {browserHistory} >
      <Route path="/" component={ Login } >
        <Route path="/admin" component={ Admin } />
        <Route path="/sign_in" component={ SignIn } />
        <Route path="/register" component={ Register } />
        <Route path="/admin/user" component={ User } />
        <Route path="/admin/categories" component={ Categories } />
        <Route path="/products" component={ Products } />
        <Route path="/admin/new_products" component={ NewProducts } />
      </Route>
    </Router>
  );
}
