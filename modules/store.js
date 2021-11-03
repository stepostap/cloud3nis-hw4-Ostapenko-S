import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas'; 
import { combineReducers } from 'redux';
import notesReducer from './notesReducer';

const sagaMiddleware = createSagaMiddleware()
export default createStore(
    combineReducers({Notes: notesReducer}),
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)