import {
  PAGINATION
} from '../actions/actionTypes';

export default function pagination(state = {}, action) {
  switch (action.type) {
    case PAGINATION:
      return {
        ...state,
        ...action.pagination
      };
    default:
      return state;
  }
}
