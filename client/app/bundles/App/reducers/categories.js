var data = [
  {
    id: 1,
    name: 'Всі'
  },
  {
    id: 2,
    name: 'Кіно'
  },
  {
    id: 3,
    name: 'Музика'
  },
  {
    id: 4,
    name: 'Ігри'
  }
];

export default function categories(state = data, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        action.data
      ];
    case 'SHOW_CATEGORIES':
      return [
        ...state,
        action.data
      ];
    default:
      return state;
  }
}