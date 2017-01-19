import { combineReducers } from 'redux';
import { authStateReducer } from 'redux-auth';
import { configure } from 'redux-auth';
import products from './products'


const rootReducer = combineReducers({
  products,
  authStateReducer: authStateReducer
})

export default rootReducer; 
