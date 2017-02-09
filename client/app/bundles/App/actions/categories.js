const addCategory = (paramsCategory) => dispatch => {
  dispatch({
    type: 'ADD_CATEGORY',
    valueCategory: paramsCategory
  })
};
const editCategory = (paramsCategory) => dispatch => {
  dispatch({
    type: 'EDIT_CATEGORY',
    valueCategory: paramsCategory
  })
};
const removeCategory = (indexCategory) => dispatch => {
  dispatch({
    type: 'REMOVE_CATEGORY',
    indexCategory: indexCategory
  });
};

const currentCategory = (categoryName) => dispatch => {
  dispatch({
    type: 'CURRENT_CATEGORY',
    currentCategory: categoryName
  });
};

export {addCategory, editCategory, removeCategory, currentCategory};