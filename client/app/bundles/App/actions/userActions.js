import * as types from './actionTypes';
import userApi from '../api/UserApi';

/* Registration user */
export function addUser(paramsUser) {
  return (dispatch) => {
    return userApi.createUser(paramsUser).then(response => {
      dispatch({
        type: types.ADD_USER,
        users: paramsUser
      });
      let alert = JSON.parse(response.text);
      dispatch({
        type: types.ADD_NOTIFICATION,
        message: alert.message.text,
        level: alert.message.type
      });
    }).catch(error => {
      throw(error);
    });
  };
}

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