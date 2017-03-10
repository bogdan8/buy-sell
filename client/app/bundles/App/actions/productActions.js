import * as types from './actionTypes';
import productApi from '../api/ProductApi';

export function addProduct(paramsProduct) {
  return (dispatch) => {
    return productApi.createProduct(paramsProduct).then(() => {
      dispatch({
        type: types.ADD_PRODUCT,
        products: paramsProduct
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export function allApprovedProducts() {
  return function (dispatch) {
    return productApi.getApprovedProducts().then(response => {
      dispatch({
        type: types.GET_APPROVED_PRODUCTS,
        products: response.body
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export function allProducts() {
  return function (dispatch) {
    return productApi.getAllProducts().then(response => {
      dispatch({
        type: types.GET_ALL_PRODUCTS,
        products: response.body
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

export function removeProduct(indexProduct, id) {
  return function (dispatch) {
    return productApi.destroyProduct(id).then(() => {
      dispatch({
        type: types.REMOVE_PRODUCT,
        indexProduct: indexProduct
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export function stateProduct(paramsProduct) {
  return function (dispatch) {
    return productApi.changeApproved(paramsProduct).then(() => {
      dispatch({
        type: types.STATE_PRODUCT,
        valueProduct: paramsProduct
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export function setAdminFilterOptionProducts(name, isChecked) {
  return {
    type: types.GET_ADMIN_FILTER_OPTIONS_PRODUCTS,
    filterOption: {name: name, isChecked: isChecked}
  }
}