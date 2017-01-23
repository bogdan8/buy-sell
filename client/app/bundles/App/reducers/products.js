const addProduct = (products, product) =>  {
  return [product];
}

export default function products(products=[], action) {
  switch (action.type) {
    case 'ADD_PRODUCT': 
      return addProduct(products, action.product);
    default: 
      return state;
  }
}