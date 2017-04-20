import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import {browserHistory} from 'react-router';

export function message(message, level) {
  return {
    type: types.ADD_NOTIFICATION,
    message: message,
    level: level
  }
}

export function logInUser(credentials) {
  return function (dispatch) {
    return sessionApi.login(credentials).then(response => {
      if (response.status == '404') {
        dispatch(message('Невірні данні', 'error'));
      } else {
        let response_text = JSON.parse(response.text);
        sessionStorage.setItem('jwt', response_text.jwt);
        sessionStorage.setItem('id', response_text.id);
        sessionStorage.setItem('role', response_text.role);
        sessionStorage.setItem('avatar', response_text.avatar);
        dispatch({
          type: types.LOG_IN_SUCCESS,
          user: {
            id: response_text.id,
            role: response_text.role,
            avatar: response_text.avatar
          }
        });
        dispatch(message('Ви успішно ввійшли', 'success'));
        browserHistory.push('/products');
      }
    }).catch(error => {
      throw(error);
    });
  };
}
export function logOutUser() {
  return function (dispatch) {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('avatar');
    dispatch({type: types.LOG_OUT});
    dispatch(message('Ви успішно вийшли', 'success'));
    browserHistory.push('/products');
  }
}