import * as types from './actionTypes';
import userApi from '../api/UserApi';
import history from '../history';


export function message(message, level) {
  return {
    type: types.ADD_NOTIFICATION,
    message: message,
    level: level
  }
}

/* Get all users */
export function allUsers() {
  return function (dispatch) {
    return userApi.getAllUsers().then(response => {
      dispatch({
        type: types.GET_ALL_USERS,
        users: response.body
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Get all roles user */
export function allRoles() {
  return function (dispatch) {
    return userApi.getAllRoles().then(response => {
      dispatch({
        type: types.GET_ALL_ROLES,
        roles: response.body
      });
    }).catch(error => {
      throw(error);
    });
  };
}

/* Registration user */
export function addUser(paramsUser) {
  return (dispatch) => {
    return userApi.createUser(paramsUser).then(response => {
      let alert = JSON.parse(response.text);
      dispatch(message(alert.message.text, alert.message.type));
      if (alert.message.type == 'success') {
        history.push('/sign_in');
      }
    }).catch(error => {
      throw(error);
    });
  };
}

export function changeRole(paramsUser) {
  return (dispatch) => {
    return userApi.changeUserRole(paramsUser).then(response => {
      dispatch({
        type: types.CHANGE_ROLE_IN_USER,
        paramsUser: paramsUser
      });
      let alert = JSON.parse(response.text);
      dispatch(message(alert.message.text, alert.message.type));
    }).catch(error => {
      throw(error);
    });
  };
}

/* Remove user */
export function removeUser(indexUser, id) {
  return function (dispatch) {
    return userApi.destroyUser(id).then(response => {
      dispatch({
        type: types.REMOVE_USER,
        indexUser: indexUser
      });
      let alert = JSON.parse(response.text);
      dispatch(message(alert.message.text, alert.message.type));
    }).catch(error => {
      throw(error);
    });
  };
}
