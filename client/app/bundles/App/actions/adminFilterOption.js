const setAdminFilterOption = (name, isChecked) => dispatch => {
  dispatch({
    type: 'GET_ADMIN_FILTER_OPTIONS',
    filterOption: {name: name, isChecked: isChecked}
  })
};

export {setAdminFilterOption};