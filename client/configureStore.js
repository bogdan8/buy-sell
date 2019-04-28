import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools  } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from './app/reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
		createRootReducer(history),
		preloadedState,
		compose(
			composeWithDevTools(
				applyMiddleware(
					routerMiddleware(history),
					thunk
				),
			),
		),
  )
	return store
}
