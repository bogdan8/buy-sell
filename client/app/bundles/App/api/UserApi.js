import request from 'superagent';

class UserApi {
  /* Get all users */
  static getAllUsers() {
    let req = request.get('/users.json').set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  /* Get all users */
  static getAllRoles() {
    let req = request.get('/users/roles.json').set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  /* change user role */
  static changeUserRole(paramsUser) {
    let req = request.post(`/users/${paramsUser.id}/change_role.json`).set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`);
    req.field('user[role_id]', paramsUser.role_id);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }

  /* Create user */
  static createUser(paramsUser) {
    let req = request.post('/users.json');
    req.field('user[username]', paramsUser.username)
      .field('user[email]', paramsUser.email)
      .field('user[password]', paramsUser.password)
      .field('user[repeat_password]', paramsUser.repeat_password)
      .field('user[telephone]', paramsUser.telephone)
      .field('user[location]', paramsUser.location)
      .attach('user[avatar]', paramsUser.avatar);
    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }
}

export default UserApi