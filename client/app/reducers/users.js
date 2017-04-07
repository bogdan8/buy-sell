import {GET_ALL_USERS, REMOVE_USER, CHANGE_ROLE_IN_USER} from '../actions/actionTypes';

export default function users(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    case REMOVE_USER:
      return [
        ...state.slice(0, action.indexUser),
        ...state.slice(action.indexUser + 1)
      ];
    case CHANGE_ROLE_IN_USER:
      return state.map((item) => {
        if (item.id != action.paramsUser.id) {
          return item;
        }
        return {
          ...item,
          ...action.paramsUser
        };
      });
    default:
      return state;
  }
}