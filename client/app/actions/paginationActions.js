import * as types from './actionTypes'
import paginationApi from '../api/PaginationApi'

/* Get all with pagination */
export function fetchPagination(entity, page, query) {
  return function (dispatch) {
    return paginationApi.all(entity, page, query).then(response => {
      const pagination_links = JSON.parse(response.headers.pagination_links)
      const pagination_params = JSON.parse(response.headers.pagination_params)
      dispatch({
        type: types[`GET_ALL_${entity.toUpperCase()}`],
        [entity]: response.body
      })
      dispatch({
        type: types.PAGINATION,
        pagination: {...pagination_links, ...pagination_params}
      })
    }).catch(error => {
      throw(error)
    })
  }
}

/* Get all with admin pagination */
export function fetchAdminPagination(page, query) {
  return function (dispatch) {
    return paginationApi.allAdmPagination(page, query).then(response => {
      const pagination_links = JSON.parse(response.headers.pagination_links)
      const pagination_params = JSON.parse(response.headers.pagination_params)
      dispatch({
        type: types.GET_ALL_PRODUCTS,
        products: response.body
      })
      dispatch({
        type: types.PAGINATION,
        pagination: {...pagination_links, ...pagination_params}
      })
    }).catch(error => {
      throw(error)
    })
  }
}
