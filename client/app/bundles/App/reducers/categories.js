import { EDIT_CATEGORY, REMOVE_CATEGORY } from '../actions/actionTypes';

var data = [];

export default function categories(state = data, action) {
  switch (action.type) {
    case EDIT_CATEGORY:
      return state.map((item) => {
        if (item.id != action.valueCategory.id) {
          return item;
        }
        return {
          ...item,
          ...action.valueCategory
        };
      });
    case REMOVE_CATEGORY:
      return [
        ...state.slice(0, action.indexCategory),
        ...state.slice(action.indexCategory + 1)
      ];
    default:
      return state;
  }
}