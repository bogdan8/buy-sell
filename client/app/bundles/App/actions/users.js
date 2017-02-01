const removeUser = (indexUser) => dispatch => {
  dispatch({
    type: 'REMOVE_USER',
    indexUser: indexUser
  })
};

export {removeUser};