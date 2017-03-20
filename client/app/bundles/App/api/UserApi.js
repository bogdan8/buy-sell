import request from 'superagent';

class UserApi {
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