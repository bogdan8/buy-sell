import {combineReducers} from 'redux';
import products from './products';
import categories from './categories';
import adminFilterOption from './adminFilterOption';
import currentCategory from './currentCategory';
import users from './users';
import user_roles from './user_roles';
import session from './session';
import notification from './notification';
import pagination from './pagination';

const rootReducer = combineReducers({
  products,
  categories,
  adminFilterOption,
  currentCategory,
  users,
  session,
  notification,
  user_roles,
  pagination
});

export default rootReducer;