import deepFreeze from 'deep-freeze'
import products from  '../../../app/reducers/products.js'
import expect from 'expect'

const data = [
  {
    id: 1,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'John Lennon Кіно',
    category: 'Кіно',
    price: '4568$'
  }, {
    id: 2,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'John Lennon Музика',
    category: 'Музика',
    price: '4568$'
  }, {
    id: 3,
    photo: 'https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-142869191-1-1500x1000.jpg',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    contact: 'John Lennon Ігри',
    category: 'Ігри',
    price: '4568$'
  }
]

deepFreeze(data)

describe('Product Reducer', () => {
  describe('#Add Product', () => {
    it('return new hash with new product', () => {
      let paramsProduct = {
        type: 'ADD_PRODUCT',
        valueProduct: {
          id: data.length + 1,
          name: 'Новий продукт'
        }
      }
      const newProduct = products(data, paramsProduct)
      expect(
          newProduct.length
      ).toBeGreaterThan(data.length)
    })
  })
  describe('#Remove Product', () => {
    it('return new hash with remove one product', () => {
      let paramsProduct = {
        paramsProduct: {
          id: data.length - 1
        },
        type: 'REMOVE_PRODUCT',
      }
      const removeProduct = products(data, paramsProduct)
      expect(
          removeProduct.length
      ).toBeLessThan(data.length)
    })
  })
})

