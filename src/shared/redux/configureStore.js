// Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// Root Reducer
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const middleware = [
    thunk,
    logger
  ];
  
  return createStore(
    rootReducer,
    initialState,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(...middleware)
    )
  );
}