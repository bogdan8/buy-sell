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

const choseCategory = (category) => dispatch => {
  dispatch({
    type: 'CHOSE_CATEGORY',
    choseCategory: category
  });
};

const choseCategoryInModal = (category) => dispatch => {
  dispatch({
    type: 'CHOSE_CATEGORY_IN_MODAL',
    choseCategory: category
  });
};

export {addCategory, editCategory, removeCategory, choseCategory, choseCategoryInModal};