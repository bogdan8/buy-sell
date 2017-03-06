import {GET_ADMIN_FILTER_OPTIONS_PRODUCTS} from '../actions/actionTypes';

var data = {
  approved: false,
  deflected: false,
  prepaid: false
};

export default function currentAdminFilterOptionProducts(state = data, action) {
  switch (action.type) {
    case GET_ADMIN_FILTER_OPTIONS_PRODUCTS:
      return {
        ...state,
        [action.filterOption.name]: action.filterOption.isChecked
      };
    default:
      return state;
  }
}