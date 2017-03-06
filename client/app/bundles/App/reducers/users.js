import {REMOVE_USER, CHANGE_ROLE_IN_USER} from '../actions/actionTypes';

var data = [
  {
    id: 1,
    email: 'user@user.com',
    contacts: 'User Userov',
    role: 'admin'
  },
  {
    id: 2,
    email: 'bobo@bobo.com',
    contacts: 'Bob Bobo',
    role: 'user'
  },
  {
    id: 3,
    email: 'test@test.com',
    contacts: 'Test Test',
    role: 'user'
  }
];

export default function users(state = data, action) {
  switch (action.type) {
    case REMOVE_USER:
      return [
        ...state.slice(0, action.indexUser),
        ...state.slice(action.indexUser + 1)
      ];
    case CHANGE_ROLE_IN_USER:
      return state.map((item) => {
        if (item.id != action.valueUser.id) {
          return item;
        }
        return {
          ...item,
          ...action.valueUser
        };
      });
    default:
      return state;
  }
}