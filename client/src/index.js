import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import index from './redux/reducers/index'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
const store = createStore(index,composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

