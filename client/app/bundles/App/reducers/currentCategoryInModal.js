const data = '';

export default function currentCategoryInModal(state = data, action) {
  switch (action.type) {
    case 'CURRENT_CATEGORY_IN_MODAL':
      return action.currentCategory;
    default:
      return state;
  }
}