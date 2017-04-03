import * as types from './actionTypes';
import categoryApi from '../api/CategoryApi';
import paginationApi from '../api/PaginationApi';

export function message(message, level) {
  return {
    type: types.ADD_NOTIFICATION,
    message: message,
    level: level
  }
}

/* Create category */
export function addCategory(paramsCategory, per, category_length, current_page) {
  return (dispatch) => {
    return categoryApi.createCategory(paramsCategory).then(response => {
      let alert = JSON.parse(response.text);
      paginationApi.all('categories', current_page).then(response => { // pagination call to get new pages
        const pagination_links = JSON.parse(response.headers.pagination_links);
        const pagination_params = JSON.parse(response.headers.pagination_params);
        dispatch({
          type: types.PAGINATION,
          pagination: {...pagination_links, ...pagination_params}
        });
      });
      if (per != category_length) { // check whether the number of categories at not more than in all categories
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
export function removeCategory(indexCategory, id, category_length, current_page) {
  return function (dispatch) {
    return categoryApi.destroyCategory(id).then(response => {
      dispatch({
        type: types.REMOVE_CATEGORY,
        indexCategory: indexCategory
      });
      let alert = JSON.parse(response.text);
      dispatch(message(alert.message.text, alert.message.type));
      if (category_length == 1) { // checks or categories on page left
        paginationApi.all('categories', current_page - 1).then(response => { // pagination call to get new pages
          const pagination_links = JSON.parse(response.headers.pagination_links);
          const pagination_params = JSON.parse(response.headers.pagination_params);
          dispatch({
            type: types.GET_ALL_CATEGORIES,
            categories: response.body
          });
          dispatch({
            type: types.PAGINATION,
            pagination: {...pagination_links, ...pagination_params}
          });
        });
      }
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