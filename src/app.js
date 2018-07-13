import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Site from './components/Site';
import './styles/styles.scss';

const reducer = (state, action) => {
  return state;
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Site />
  </Provider>,
  document.getElementById('app'));