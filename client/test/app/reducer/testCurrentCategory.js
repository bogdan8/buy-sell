import deepFreeze from 'deep-freeze'
import currentCategory from  '../../../app/reducers/currentCategory.js'
import expect from 'expect'

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
]

deepFreeze(data)

describe('currentCategory Reducer', () => {
  describe('#get Category in product', () => {
    it('return current category', () => {
      let name = 'Ігри'
      let paramsCategory = {
        type: 'CURRENT_CATEGORY',
        currentCategory: name
      }
      const _currentCategory = currentCategory(data, paramsCategory)
      expect(
          _currentCategory
      ).toBe(name)
    })
  })
})
