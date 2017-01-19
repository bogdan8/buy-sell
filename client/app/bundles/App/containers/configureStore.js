  
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { createStore, compose, applyMiddleware } from "redux";

export default const configureStore = () => {
  const middlewares [thunk];

  if(process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return store = createStore ({
    mainReducer,
    applyMiddleware(...middlewares_)
  });
}

