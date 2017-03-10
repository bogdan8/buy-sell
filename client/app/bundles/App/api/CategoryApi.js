import request from 'superagent';

class CategoryApi {
  static getAllCategories() {
    let req = request.get('/categories.json');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static createCategory(paramsCategory) {
    let req = request.post('/categories.json');
    req.field('category[name]', paramsCategory.name);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }
}

export default CategoryApi