import {
  REMOVE_PRODUCT,
  STATE_PRODUCT,
  GET_APPROVED_PRODUCTS,
  GET_ALL_PRODUCTS
} from '../actions/actionTypes';

const data = [];

export default function products(state = data, action) {
  switch (action.type) {
    case GET_APPROVED_PRODUCTS:
      return action.products;
    case GET_ALL_PRODUCTS:
      return action.products;
    case REMOVE_PRODUCT:
      return [
        ...state.slice(0, action.indexProduct),
        ...state.slice(action.indexProduct + 1)
      ];
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