import { addProduct } from '../actions/product';

export default products = (products = [], action) => {
  switch (action.type) {
    'ADD_PRODUCT': 
      return addProduct(products, action.product);
    default: 
      return state;
  }
}