import {combineReducers} from 'redux';
import products from './products';
import prepaidProducts from './prepaidProducts';
import categories from './categories';
import currentAdminFilterOption from './currentAdminFilterOption';
import currentCategory from './currentCategory';
import users from './users';
import session from './session';

const rootReducer = combineReducers({
  products,
  prepaidProducts,
  categories,
  currentAdminFilterOption,
  currentCategory,
  users,
  session
});

export default rootReducer;