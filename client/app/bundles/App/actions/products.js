const addProduct = (paramsProduct) => dispatch => {
  dispatch({
    type: 'ADD_PRODUCT',
    valueProduct: paramsProduct
  });
};

const removeProduct = (indexProduct) => dispatch => {
  dispatch({
    type: 'REMOVE_PRODUCT',
    indexProduct: indexProduct
  });
};

export {addProduct, removeProduct};