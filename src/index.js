import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import fetchUserReducer from './reducers/fetchUser';
import {fetchUserEpic} from './epics';
import 'rxjs';

const epicMiddleware = createEpicMiddleware(fetchUserEpic);
let store = createStore(fetchUserReducer,applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

