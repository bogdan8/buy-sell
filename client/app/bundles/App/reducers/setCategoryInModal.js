const data = '';

export default function setCategoryInModal(state = data, action) {
  switch (action.type) {
    case 'CHOSE_CATEGORY_IN_MODAL':
      return action.choseCategory;
    default:
      return state;
  }
}