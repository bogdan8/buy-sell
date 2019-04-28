import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import { createStore, applyMiddleware } from "redux"

import rootReducer from '../reducers/rootReducer'
import initialState from './initialState'

export default function configureStore() {
  const middlewares = [thunk]

  if(process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware( ...middlewares )
  )
}

