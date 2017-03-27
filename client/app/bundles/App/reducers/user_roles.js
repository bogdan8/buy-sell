import {GET_ALL_ROLES} from '../actions/actionTypes';

export default function users(state = [], action) {
  switch (action.type) {
    case GET_ALL_ROLES:
      return action.roles;
    default:
      return state;
  }
}