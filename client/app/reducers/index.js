import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import categories from './categories'
import adminFilterOption from './adminFilterOption'
import currentCategory from './currentCategory'
import users from './users'
import user_roles from './user_roles'
import session from './session'
import notification from './notification'
import pagination from './pagination'

export default (history) => combineReducers({
  router: connectRouter(history),
  products: products,
  categories: categories,
  adminFilterOption: adminFilterOption,
  currentCategory: currentCategory,
  users: users,
  session: session,
  notification: notification,
  user_roles: user_roles,
  pagination: pagination
})
