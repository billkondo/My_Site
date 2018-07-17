import { createStore, combineReducers } from 'redux';
import calculator from '../reducers/calculator';

const store = createStore(
  combineReducers({
    calculator: calculator
  })
);

export default store;
