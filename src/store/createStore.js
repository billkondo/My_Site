import { createStore, combineReducers } from 'redux';
import calculator from '../reducers/calculator';
import pomodoro_clock from '../reducers/pomodoro_clock';

const store = createStore(
  combineReducers({
    calculator: calculator,
    pomodoro_clock: pomodoro_clock
  })
);

export default store;
