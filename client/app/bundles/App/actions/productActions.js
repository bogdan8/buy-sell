import * as types from './actionTypes';
import productApi from '../api/ProductApi';

export function addProduct(paramsProduct) {
  return function (dispatch) {
    return productApi.createProducts(paramsProduct).then(() => {
      dispatch({
        type: types.ADD_PRODUCT,
        // valueProduct: paramsProduct
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export function payProduct(indexProduct) {
  return {
    type: types.PREPAID_PRODUCT,
    idProduct: indexProduct
  }
}

export function removeProduct(indexProduct) {
  return {
    type: types.REMOVE_PRODUCT,
    indexProduct: indexProduct
  }
}

export function stateProduct(paramsProduct) {
  return {
    type: types.STATE_PRODUCT,
    valueProduct: paramsProduct
  }
}

export function setAdminFilterOptionProducts(name, isChecked) {
  return {
    type: types.GET_ADMIN_FILTER_OPTIONS_PRODUCTS,
    filterOption: {name: name, isChecked: isChecked}
  }
}