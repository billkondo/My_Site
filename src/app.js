import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Site from './components/Site';
import store from './store/createStore';
import './styles/styles.scss';

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Site />
  </Provider>,
  document.getElementById('app'));