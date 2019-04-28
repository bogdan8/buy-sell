import React from 'react'
import { connect } from 'react-redux'
//import { Router, Route, hashHistory, browserHistory } from 'react-router'
//import { Route, Switch } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { Main, SignIn, Register, Products } from '../components'
import { User, Categories, AdminProducts } from '../components/admin'
import {Menu, Notification, Footer} from '../components'

const routes = (
  <div>
    <Menu/>
    <div className='body'>
      <Switch>
        <Route exact path="/" component={ Main }/>
        <Route path="/sign_in" component={ SignIn }/>
        <Route path="/register" component={ Register }/>
        <Route path="/products" component={ Products }/>
        <Route path="/admin/user" component={ User }/>
        <Route path="/admin/categories" component={ Categories }/>
        <Route path="/admin/products" component={ AdminProducts }/>
      </Switch>
    </div>
    <Footer/>
    <Notification/>
  </div>
)

export default routes
