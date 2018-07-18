import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Site from './components/Site';
import store from './store/createStore';
import './styles/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <Site />
  </Provider>,
  document.getElementById('app'));