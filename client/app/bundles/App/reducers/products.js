import {ADD_PRODUCT, REMOVE_PRODUCT, STATE_PRODUCT, GET_APPROVED_PRODUCTS} from '../actions/actionTypes';

const data = [];

export default function products(state = data, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        action.valueProduct
      ];
    case GET_APPROVED_PRODUCTS:
      return [
        ...state,
        ...action.products
      ];
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