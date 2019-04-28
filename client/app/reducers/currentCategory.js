import {CURRENT_CATEGORY} from '../actions/actionTypes'

export default function currentCategory(state = {}, action) {
  switch (action.type) {
    case CURRENT_CATEGORY:
      return action.currentCategory
    default:
      return state
  }
}
