var data = {
  approved: false,
  deflected: false,
  prepaid: false
};
export default function currentAdminFilterOption(state = data, action) {
  switch (action.type) {
    case 'GET_ADMIN_FILTER_OPTIONS':
      return {
        ...state,
        [action.filterOption.name]: action.filterOption.isChecked
      };
    default:
      return state;
  }
}