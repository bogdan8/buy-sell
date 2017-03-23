import * as types from './actionTypes';
import userApi from '../api/UserApi';
import { browserHistory } from 'react-router';

export function message(message, level) {
  return {
    type: types.ADD_NOTIFICATION,
    message: message,
    level: level
  }
}

/* Registration user */
export function addUser(paramsUser) {
  return (dispatch) => {
    return userApi.createUser(paramsUser).then(response => {
      dispatch({
        type: types.ADD_USER,
        users: paramsUser
      });
      let alert = JSON.parse(response.text);
      dispatch(message(alert.message.text, alert.message.type));
      if (alert.message.type == 'success') {
        browserHistory.push('/sign_in');
      }
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