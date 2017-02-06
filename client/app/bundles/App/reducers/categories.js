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
        action.valueCategory
      ];
    case 'EDIT_CATEGORY':
      return state.map((item) => {
        if (item.id != action.valueCategory.id) {
          return item;
        }
        return {
          ...item,
          ...action.valueCategory
        };
      });
    case 'REMOVE_CATEGORY':
      return [
        ...state.slice(0, action.indexCategory),
        ...state.slice(action.indexCategory + 1)
      ];
    default:
      return state;
  }
}