import {combineReducers} from 'redux';
import products from './products';
import categories from './categories';
import currentAdminFilterOptionProducts from './currentAdminFilterOptionProducts';
import currentCategory from './currentCategory';
import users from './users';
import user_roles from './user_roles';
import session from './session';
import notification from './notification';

const rootReducer = combineReducers({
  products,
  categories,
  currentAdminFilterOptionProducts,
  currentCategory,
  users,
  session,
  notification,
  user_roles
});

export default rootReducer;