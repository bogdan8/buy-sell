import request from 'superagent';

class PaginationApi {
  /* Get with pagination */
  static all(entity, page = 1, query = '') {
    let req = request.get(`/${entity}/${page}.json?${query}`);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }
}

export default PaginationApi