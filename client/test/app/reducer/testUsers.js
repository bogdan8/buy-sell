import deepFreeze from 'deep-freeze'
import users from  '../../../app/reducers/users.js'
import expect from 'expect'

var data = [
  {
    id: 1,
    email: 'user@user.com',
    contacts: 'User Userov',
    role: 'user'
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
]

deepFreeze(data)

describe('User Reducer', () => {
  describe('#Chose role', () => {
    it('return new hash with edit user role', () => {
      let index = 1
      let id = 1
      let role = 'admin'
      let paramsUser = {
        type: 'CHANGE_ROLE_IN_USER',
        paramsUser: {
          id: id,
          role: role,
        }
      }
      const editUser = users(data, paramsUser)
      expect(
          editUser[0].role
      ).toBe(role)
    })
  })
  describe('#Remove User', () => {
    it('return new hash with remove one user', () => {
      let paramsUser = {
        type: 'REMOVE_USER',
        indexUser: data.length - 1,
      }
      const removeUsers = users(data, paramsUser)
      expect(
          removeUsers.length
      ).toBeLessThan(data.length)
    })
  })
})

