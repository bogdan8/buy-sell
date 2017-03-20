import request from 'superagent';

class SessionApi {
  static login(credentials) {
    let req = request.post('/user_token.json');
    req.type('application/json')
        .send({
          email: credentials.email,
          password: credentials.password
        });
    return req.then(response => {
      return response.json();
    }, error => {
      return error;
    });
  }
}

export default SessionApi;