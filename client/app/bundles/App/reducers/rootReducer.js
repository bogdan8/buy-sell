import { combineReducers } from 'redux';
import { configure, authStateReducer } from 'redux-auth';
import products from './products'

export default rootReducer = combineReducers({
  products,
  authStateReducer: authStateReducer
})

