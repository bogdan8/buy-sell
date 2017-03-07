import request from 'superagent';

class ProductApi {
  /*  static requestHeaders() {
   return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
   }*/

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