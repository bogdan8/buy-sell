import request from 'superagent';

class ProductApi {
  /* Get all products */
  static getAllProducts() {
    let req = request.get('/products.json');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  /* Create product */
  static createProduct(paramsProduct) {
    let req = request.post('/products.json').set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
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

  /* Remove product */
  static destroyProduct(id) {
    let req = request.delete(`/products/${id}.json`).set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  /* Set state approved product is true or false */
  static changeApproved(paramsProduct) {
    let req = request.post(`/products/${paramsProduct.id}/approved.json`).set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
    req.field('product[approved]', paramsProduct.approved);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  /* Set product prepaid */
  static prepaidProduct(valuePrepaidProduct) {
    let req = request.post(`/products/${valuePrepaidProduct.product_id}/prepaid.json`).set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
    req.field('product[prepaid_end_date]', valuePrepaidProduct.prepaid_end_date);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  /* Set product unpaid */
  static unpayProduct(productId) {
    let req = request.post(`/products/${productId}/unpaid.json`).set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }
}

export default ProductApi