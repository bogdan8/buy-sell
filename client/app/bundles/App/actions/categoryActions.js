import * as types from './actionTypes';
import categoryApi from '../api/CategoryApi';

export function message(message, level) {
  return {
    type: types.ADD_NOTIFICATION,
    message: message,
    level: level
  }
}

/* Create category */
export function addCategory(paramsCategory, per, category_length) {
  return (dispatch) => {
    return categoryApi.createCategory(paramsCategory).then(response => {
      let alert = JSON.parse(response.text);
      if (per != category_length) {
        dispatch({
          type: types.ADD_CATEGORY,
          categories: paramsCategory
        });
      }
      dispatch(message(alert.message.text, alert.message.type));
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
      dispatch(message(alert.message.text, alert.message.type));
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
      dispatch(message(alert.message.text, alert.message.type));
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