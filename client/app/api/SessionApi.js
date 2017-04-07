import request from 'superagent';

class SessionApi {
  static login(credentials) {
    let req = request.post('/user_token.json');
    req.set('Content-Type', 'application/json');
    req.send(JSON.stringify({auth: credentials}));

    return req.then(response => {
      return response;
    }, error => {
      return error;
    });
  }
}

export default SessionApi;