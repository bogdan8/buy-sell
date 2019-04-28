import request from 'superagent'

class PaginationApi {
  /* Get with pagination */
  static all(entity, page = 1, query = '') {
    let req = request.get(`/${entity}/${page}.json?${query}`)
    return req.then(response => {
      return response
    }, error => {
      return error
    })
  }

  /* Get with Admin Pagination */
  static allAdmPagination(page = 1, query = '') {
    let req = request.get(`/products/pagination_admin/${page}.json?${query}`).set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`)
    return req.then(response => {
      return response
    }, error => {
      return error
    })
  }
}

export default PaginationApi
