import * as types from './actionTypes';
import categoryApi from '../api/CategoryApi';

export function addCategory(paramsCategory) {
  return function (dispatch) {
    return categoryApi.createCategory(paramsCategory).then(() => {
      dispatch({
        type: types.ADD_CATEGORY,
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export function editCategory(paramsCategory) {
  return {
    type: types.EDIT_CATEGORY,
    valueCategory: paramsCategory
  }
}

export function removeCategory(indexCategory) {
  return {
    type: types.REMOVE_CATEGORY,
    indexCategory: indexCategory
  }
}

export function currentCategory(currentCategoryParams) {
  return {
    type: types.CURRENT_CATEGORY,
    currentCategory: currentCategoryParams
  }
}