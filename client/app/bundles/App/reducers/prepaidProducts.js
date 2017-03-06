import {PREPAID_PRODUCT} from '../actions/actionTypes';

const data = [];

export default function prepaidProducts(state = data, action) {
  switch (action.type) {
    case PREPAID_PRODUCT:
      return [
        ...state,
        action.idProduct
      ];
    default:
      return state;
  }
}
