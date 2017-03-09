import request from 'superagent';

class CategoryApi {
  static getAllCategories() {
    let req = request.get('/category');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static createCategory(paramsCategory) {
    let req = request.post('/category');
    req.field('category[name]', paramsCategory.name);
    return req.then(response => {
      return response.json();
    }, error => {
      return error;
    });
  }
}

export default CategoryApi