import request from 'superagent';

class ProductApi {
  static getApprovedProducts() {
    let req = request.get('/product')
        .query('approved=true');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static getAllProducts() {
    let req = request.get('/product');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static createProducts(paramsProduct) {
    let req = request.post('/product');
    req.field('product[text]', paramsProduct.text)
        .field('product[price]', paramsProduct.price)
        .field('product[user_id]', paramsProduct.user_id)
        .field('product[category_id]', paramsProduct.category_id)
        .attach('product[image]', paramsProduct.image);
    return req.then(response => {
      return response.json();
    }, error => {
      return error;
    });
  }
}

export default ProductApi