import request from 'superagent';

class ProductApi {
  static getAllProducts() {
    let req = request.get('/products.json');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static getApprovedProducts() {
    let req = request.get('/products.json')
      .query('approved=true');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static createProduct(paramsProduct) {
    let req = request.post('/products.json');
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

  static destroyProduct(id) {
    let req = request.delete(`/products/${id}.json`);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static changeApproved(paramsProduct) {
    let req = request.post(`/products/${paramsProduct.id}/approved.json`);
    req.field('product[approved]', paramsProduct.approved);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static prepaidProduct(valuePrepaidProduct) {
    let req = request.post(`/products/${valuePrepaidProduct.product_id}/prepaid.json`);
    req.field('product[prepaid_end_date]', valuePrepaidProduct.prepaid_end_date);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  static getPrepaidProducts() {
    let req = request.get('/products/all_prepaid_product.json');
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }
}

export default ProductApi