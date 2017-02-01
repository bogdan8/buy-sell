const removeUser = (indexUser) => dispatch => {
  dispatch({
    type: 'REMOVE_USER',
    indexUser: indexUser
  })
};
const changeRole = (valueUser) => dispatch => {
  dispatch({
    type: 'CHANGE_ROLE_IN_USER',
    valueUser: valueUser
  })
};
export {removeUser, changeRole};