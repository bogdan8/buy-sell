const data = '';

export default function setCategory(state = data, action) {
  switch (action.type) {
    case 'CHOSE_CATEGORY':
      return action.data;
    default:
      return state;
  }
}