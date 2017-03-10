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

  static updateCategory(paramsCategory) {
    let req = request.put(`/categories/${paramsCategory.id}.json`);
    req.send({category: paramsCategory});
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static destroyCategory(id) {
    let req = request.delete(`/categories/${id}.json`);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }
}

export default CategoryApi