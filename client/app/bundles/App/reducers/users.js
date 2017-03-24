import {REMOVE_USER, CHANGE_ROLE_IN_USER} from '../actions/actionTypes';

var data = [];

export default function users(state = data, action) {
  switch (action.type) {
    case REMOVE_USER:
      return [
        ...state.slice(0, action.indexUser),
        ...state.slice(action.indexUser + 1)
      ];
    case CHANGE_ROLE_IN_USER:
      return state.map((item) => {
        if (item.id != action.valueUser.id) {
          return item;
        }
        return {
          ...item,
          ...action.valueUser
        };
      });
    default:
      return state;
  }
}