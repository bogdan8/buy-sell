class ProductApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}` }
  }

  static getAllProducts() {
    const headers = this.requestHeaders();
    const request = new Request('http://job:3000/products.json', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductApi