import {combineReducers} from 'redux';
import products from './products';
import prepaidProducts from './prepaidProducts';
import categories from './categories';
import currentCategory from './currentCategory';
import users from './users';
import session from './session';

const rootReducer = combineReducers({
  products,
  prepaidProducts,
  categories,
  currentCategory,
  users,
  session
});

export default rootReducer;