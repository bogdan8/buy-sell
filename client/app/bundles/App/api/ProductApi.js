import request from 'superagent';

class ProductApi {
  static getApprovedProducts() {
    let req = request.get('/products')
        .query('approved=true');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static getAllProducts() {
    let req = request.get('/products');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static changeApproved(paramsProduct) {
    let req = request.post(`/products/${paramsProduct.id}/approved`);
    req.field('product[approved]', paramsProduct.approved);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static destroyProduct(id) {
    let req = request.delete(`/products/${id}`);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static createProduct(paramsProduct) {
    let req = request.post('/products');
    req.field('product[text]', paramsProduct.text)
        .field('product[price]', paramsProduct.price)
        .field('product[user_id]', paramsProduct.user_id)
        .field('product[category_id]', paramsProduct.category_id)
        .attach('product[image]', paramsProduct.image);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }
}

export default ProductApi