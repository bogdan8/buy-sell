import * as types from './actionTypes';

export function removeUser(indexUser) {
  return {
    type: types.REMOVE_USER,
    indexUser: indexUser
  }
}

export function changeRole(valueUser) {
  return {
    type: types.CHANGE_ROLE_IN_USER,
    valueUser: valueUser
  }
}