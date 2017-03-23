import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

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
        let response_text = JSON.parse(response.text)
        sessionStorage.setItem('jwt', response_text.jwt);
        dispatch(loginSuccess());
        dispatch(message('Ви успішно ввійшли', 'success'));
      }
    }).catch(error => {
      throw(error);
    });
  };
}
export function logOutUser() {
  return function (dispatch) {
    sessionStorage.removeItem('jwt');
    dispatch(message('Ви успішно вийшли', 'success'));
    dispatch({type: types.LOG_OUT});
  }
}