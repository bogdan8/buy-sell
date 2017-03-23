import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function logInUser(credentials) {
  return function (dispatch) {
    return sessionApi.login(credentials).then(response => {
      if (response.status == '404') {
        dispatch({
          type: types.ADD_NOTIFICATION,
          message: 'Невірні данні',
          level: 'error'
        });
      } else {
        sessionStorage.setItem('jwt', response.json().jwt);
        dispatch(loginSuccess());
        dispatch({
          type: types.ADD_NOTIFICATION,
          message: 'Ви успішно зайшли',
          level: 'success'
        });
      }
    }).catch(error => {
      console.log('error a');
      throw(error);
    });
  };
}
export function logOutUser() {
  return function (dispatch) {
    sessionStorage.removeItem('jwt');
    dispatch({
      type: types.ADD_NOTIFICATION,
      message: 'Ви успішно вийшли',
      level: 'success'
    });
    return {type: types.LOG_OUT}
  }
}