import {combineReducers} from 'redux';
import products from './products';
import categories from './categories';
import currentCategory from './currentCategory';
import currentCategoryInModal from './currentCategoryInModal';
import users from './users';
import session from './session';

const rootReducer = combineReducers({
  products,
  categories,
  currentCategory,
  currentCategoryInModal,
  users,
  session
});

export default rootReducer;


