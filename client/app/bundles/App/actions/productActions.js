import * as types from './actionTypes';
import productApi from '../api/ProductApi';

/* Create product */
export function addProduct(paramsProduct) {
  return (dispatch) => {
    return productApi.createProduct(paramsProduct).then(response => {
      dispatch({
        type: types.ADD_PRODUCT,
        products: paramsProduct
      });
      let alert = JSON.parse(response.text);
      dispatch({
        type: types.ADD_NOTIFICATION,
        message: alert.message.text,
        level: alert.message.type
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Get all products where approved true */
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

/* Get all products */
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

/* Get all products where product is prepaid */
export function allPrepaidProducts() {
  return function (dispatch) {
    return productApi.getPrepaidProducts().then(response => {
      dispatch({
        type: types.GET_ALL_PREPAID_PRODUCTS,
        prepaidProducts: response.body
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Set product prepaid */
export function payProduct(valuePrepaidProduct) {
  return function (dispatch) {
    return productApi.prepaidProduct(valuePrepaidProduct).then(response => {
      dispatch({
        type: types.PREPAID_PRODUCT,
        valuePrepaidProduct: valuePrepaidProduct
      });
      let alert = JSON.parse(response.text);
      dispatch({
        type: types.ADD_NOTIFICATION,
        message: alert.message.text,
        level: alert.message.type
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Remove product */
export function removeProduct(indexProduct, id) {
  return function (dispatch) {
    return productApi.destroyProduct(id).then(response => {
      dispatch({
        type: types.REMOVE_PRODUCT,
        indexProduct: indexProduct
      });
      let alert = JSON.parse(response.text);
      dispatch({
        type: types.ADD_NOTIFICATION,
        message: alert.message.text,
        level: alert.message.type
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Set state approved product is true or false */
export function stateProduct(paramsProduct) {
  return function (dispatch) {
    return productApi.changeApproved(paramsProduct).then(response => {
      dispatch({
        type: types.STATE_PRODUCT,
        valueProduct: paramsProduct
      });
      let alert = JSON.parse(response.text);
      dispatch({
        type: types.ADD_NOTIFICATION,
        message: alert.message.text,
        level: alert.message.type
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Set options selected by the administrator to filter the unapproved products */
export function setAdminFilterOptionProducts(name, isChecked) {
  return {
    type: types.GET_ADMIN_FILTER_OPTIONS_PRODUCTS,
    filterOption: {name: name, isChecked: isChecked}
  }
}