import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  STATE_PRODUCT,
  GET_ALL_PRODUCTS,
  PREPAID_PRODUCT,
  UNPAID_PRODUCT
} from '../actions/actionTypes.js';

export default function products(state = [], action) {
  console.log(action.type)
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        action.products
      ];
    case GET_ALL_PRODUCTS:
      return action.products;
    case PREPAID_PRODUCT:
      return action.products;
    case UNPAID_PRODUCT:
      return action.products;
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.paramsProduct.id);
    case STATE_PRODUCT:
      return state.map((item) => {
        if (item.id != action.valueProduct.id) {
          return item;
        }
        return {
          ...item,
          ...action.valueProduct
        };
      });
    default:
      return state;
  }
}
