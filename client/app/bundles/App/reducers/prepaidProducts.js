import {PREPAID_PRODUCT, GET_ALL_PREPAID_PRODUCTS} from '../actions/actionTypes';

const data = [];

export default function prepaidProducts(state = data, action) {
  switch (action.type) {
    case GET_ALL_PREPAID_PRODUCTS:
      return action.prepaidProducts;
    case PREPAID_PRODUCT:
      return [
        ...state,
        action.valuePrepaidProduct
      ];
    default:
      return state;
  }
}
