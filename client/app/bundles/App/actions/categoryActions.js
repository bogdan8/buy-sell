import * as types from './actionTypes';
import categoryApi from '../api/CategoryApi';

export function addCategory(paramsCategory) {
  return (dispatch) => {
    return categoryApi.createCategory(paramsCategory).then(() => {
      dispatch({
        type: types.ADD_CATEGORY,
        categories: paramsCategory
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export function allCategories() {
  return function (dispatch) {
    return categoryApi.getAllCategories().then(response => {
      dispatch({
        type: types.GET_ALL_CATEGORIES,
        categories: response.body
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