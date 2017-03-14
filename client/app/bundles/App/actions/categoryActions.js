import * as types from './actionTypes';
import categoryApi from '../api/CategoryApi';

/* Create category */
export function addCategory(paramsCategory) {
  return (dispatch) => {
    return categoryApi.createCategory(paramsCategory).then(response => {
      dispatch({
        type: types.ADD_CATEGORY,
        categories: paramsCategory
      });
      let alert = JSON.parse(response.text);
      dispatch({
        type: types.ADD_NOTIFICATION,
        message: alert.message.text,
        level: alert.message.type
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
    return categoryApi.updateCategory(paramsCategory).then(response => {
      dispatch({
        type: types.EDIT_CATEGORY,
        valueCategory: paramsCategory
      });
      let alert = JSON.parse(response.text);
      dispatch({
        type: types.ADD_NOTIFICATION,
        message: alert.message.text,
        level: alert.message.type
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Remove category */
export function removeCategory(indexCategory, id) {
  return function (dispatch) {
    return categoryApi.destroyCategory(id).then(response => {
      dispatch({
        type: types.REMOVE_CATEGORY,
        indexCategory: indexCategory
      });
      let alert = JSON.parse(response.text);
      dispatch({
        type: types.ADD_NOTIFICATION,
        message: alert.message.text,
        level: alert.message.type
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