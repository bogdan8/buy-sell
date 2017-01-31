import {combineReducers} from 'redux';
import {authStateReducer} from 'redux-auth';
import {configure} from 'redux-auth';
import products from './products';
import categories from './categories';
import setCategory from './setCategory';
import setCategoryInModal from './setCategoryInModal';

const rootReducer = combineReducers({
  products,
  categories,
  setCategory,
  setCategoryInModal,
  authStateReducer: authStateReducer
});

export default rootReducer;


