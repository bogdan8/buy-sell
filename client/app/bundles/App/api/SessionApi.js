class SessionApi {
  static login(credentials) {
    const request = new Request('http://localhost:3000/user_token.json', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }
}

export default SessionApi;