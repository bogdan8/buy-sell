import React from 'react'
import { hydrate } from 'react-dom'
import App from '../components/App.jsx'
import { Provider } from 'react-redux'
import configureStore, { history } from '../../configureStore'

const store = configureStore()

hydrate(
  <Provider store={ store }>
    <App history={ history } />
  </Provider>,
  document.querySelector('#app')
)
