import * as types from './actionTypes';
import paginationApi from '../api/PaginationApi';

/* Get all categories */
export function fetchPagination(entity, page) {
  return function (dispatch) {
    return paginationApi.all(entity, page).then(response => {
      const pagination_links = JSON.parse(response.headers.pagination_links);
      const pagination_params = JSON.parse(response.headers.pagination_params);
      if (entity == 'categories') {
        dispatch({
          type: types.GET_ALL_CATEGORIES,
          categories: response.body
        });
      } else if (entity == 'users') {
        dispatch({
          type: types.GET_ALL_USERS,
          users: response.body
        });
      }
      dispatch({
        type: types.PAGINATION,
        pagination: {...pagination_links, ...pagination_params}
      });
    }).catch(error => {
      throw(error);
    });
  };
}