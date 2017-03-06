import * as types from './actionTypes';

export function addProduct(paramsProduct) {
  return {
    type: types.ADD_PRODUCT,
    valueProduct: paramsProduct
  }
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