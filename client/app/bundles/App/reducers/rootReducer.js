import {combineReducers} from 'redux';
import products from './products';
import prepaidProducts from './prepaidProducts';
import categories from './categories';
import currentAdminFilterOptionProducts from './currentAdminFilterOptionProducts';
import currentCategory from './currentCategory';
import users from './users';
import session from './session';

const rootReducer = combineReducers({
  products,
  prepaidProducts,
  categories,
  currentAdminFilterOptionProducts,
  currentCategory,
  users,
  session
});

export default rootReducer;