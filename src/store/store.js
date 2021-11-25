import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index.js';
import rootSaga from '../sagas/'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return{
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
};

export default configureStore;