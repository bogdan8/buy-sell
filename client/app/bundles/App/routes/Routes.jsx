import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Login from '../components/Login';
import Admin from '../components/Admin';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import UserTable from '../components/UserTable';
import TableCategories from '../components/TableCategories';
import Advertisement from '../components/Advertisement';
import NewAdvertisement from '../components/NewAdvertisement';

export default function Routes() {
  return (
    <Router history = {browserHistory} >
      <Route path="/" component={ Login } >
        <Route path="/admin" component={ Admin } />
        <Route path="/sign_in" component={ SignIn } />
        <Route path="/register" component={ Register } />
        <Route path="/user_table" component={ UserTable } />
        <Route path="/table_categories" component={ TableCategories } />
        <Route path="/advertisement" component={ Advertisement } />
        <Route path="/new_advertisement" component={ NewAdvertisement } />
      </Route>
    </Router>
  );
}
