import deepFreeze from 'deep-freeze';
import categories from  '../../../app/bundles/App/reducers/categories.js';
import expect from 'expect';

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

deepFreeze(data);

describe('Category Reducer', () => {
  describe('#Add Category', () => {
    it('return new hash with new category', () => {
      let paramsCategory = {
        type: 'ADD_CATEGORY',
        valueCategory: {
          id: data.length + 1,
          name: 'Нова категорія'
        }
      };
      const newCategory = categories(data, paramsCategory);
      expect(
          newCategory.length
      ).toBeGreaterThan(data.length);
    });
  });
  describe('#Edit Category', () => {
    it('return new hash with edit name in category', () => {
      let id = 1;
      let name = 'Нове значення';
      let paramsCategory = {
        type: 'EDIT_CATEGORY',
        valueCategory: {
          id: id,
          name: name,
        }
      };
      const editCategory = categories(data, paramsCategory);
      expect(
          editCategory[0].name
      ).toBe(name);
    });
  });
  describe('#Remove Category', () => {
    it('return new hash with remove one category', () => {
      let paramsCategory = {
        type: 'REMOVE_CATEGORY',
        indexCategory: data.length - 1,
      };
      const removeCategory = categories(data, paramsCategory);
      expect(
          data.length
      ).toBeGreaterThan(removeCategory.length);
    });
  });
});