const addProduct = (paramsProduct) => dispatch => {
  dispatch({
    type: 'ADD_PRODUCT',
    valueProduct: paramsProduct
  });
};

const payProduct = (indexProduct) => dispatch => {
  dispatch({
    type: 'PREPAID_PRODUCT',
    idProduct: indexProduct
  });
};

const removeProduct = (indexProduct) => dispatch => {
  dispatch({
    type: 'REMOVE_PRODUCT',
    indexProduct: indexProduct
  });
};

const stateProduct = (paramsProduct) => dispatch => {
  dispatch({
    type: 'STATE_PRODUCT',
    valueProduct: paramsProduct
  });
};

export {addProduct, payProduct, removeProduct, stateProduct};