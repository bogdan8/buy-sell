import {combineReducers} from 'redux';
import {authStateReducer} from 'redux-auth';
import {configure} from 'redux-auth';
import products from './products';
import categories from './categories';
import currentCategory from './currentCategory';
import currentCategoryInModal from './currentCategoryInModal';
import users from './users';

const rootReducer = combineReducers({
  products,
  categories,
  currentCategory,
  currentCategoryInModal,
  users,
  authStateReducer: authStateReducer
});

export default rootReducer;


