import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import fetchUserReducer from './reducers/fetchUserReducer';
import fetchReposReducer from './reducers/fetchReposReducer';
import rootReducer from './reducers'
import {fetchUserEpic,fetchReposEpic} from './epics';
import 'rxjs';

const rootEpic = combineEpics( fetchUserEpic, fetchReposEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
//const rootReducer = combineReducers({fetchUserReducer});
let store = createStore(fetchReposReducer,applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

