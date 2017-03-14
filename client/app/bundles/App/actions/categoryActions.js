import * as types from './actionTypes';
import categoryApi from '../api/CategoryApi';

/* Create category */
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

/* Get all categories */
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

/* Edit category */
export function editCategory(paramsCategory) {
  return function (dispatch) {
    return categoryApi.updateCategory(paramsCategory).then(() => {
      dispatch({
        type: types.EDIT_CATEGORY,
        valueCategory: paramsCategory
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Remove category */
export function removeCategory(indexCategory, id) {
  return function (dispatch) {
    return categoryApi.destroyCategory(id).then(() => {
      dispatch({
        type: types.REMOVE_CATEGORY,
        indexCategory: indexCategory
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Category is selected for filtering on the products page */
export function currentCategory(currentCategoryParams) {
  return {
    type: types.CURRENT_CATEGORY,
    currentCategory: currentCategoryParams
  }
}