import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers'
import rootEpic from './epics'
import 'rxjs';
import App from './App';
import './index.css';

const epicMiddleware = createEpicMiddleware(rootEpic);
let store = createStore(rootReducer,applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

