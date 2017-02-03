const data = '';

export default function currentCategory(state = data, action) {
  switch (action.type) {
    case 'CURRENT_CATEGORY':
      return action.currentCategory;
    default:
      return state;
  }
}