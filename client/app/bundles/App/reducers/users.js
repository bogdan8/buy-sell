var data = [
  {
    id: 1,
    email: 'user@user.com',
    contacts: 'User Userov'
  },
  {
    id: 2,
    email: 'bobo@bobo.com',
    contacts: 'Bob Bobo'
  },
  {
    id: 3,
    email: 'test@test.com',
    contacts: 'Test Test'
  }
];

export default function users(state = data, action) {
  switch (action.type) {
    case 'REMOVE_USER':
      return [
        ...state.slice(0, action.indexUser),
        ...state.slice(action.indexUser + 1)
      ];
    default:
      return state;
  }
}