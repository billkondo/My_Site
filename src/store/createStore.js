import { createStore, combineReducers } from 'redux';
import calculator from '../reducers/calculator';
import pomodoro_clock from '../reducers/pomodoro_clock';
import theme from '../reducers/theme';

const store = createStore(
  combineReducers({
    calculator: calculator,
    pomodoro_clock: pomodoro_clock,
    theme: theme
  })
);

store.subscribe(() => {
  const state = store.getState();

  if (state.theme.theme && window.localStorage.theme !== 'dark')
    window.localStorage.theme = 'dark';

  if (!state.theme.theme && window.localStorage.theme !== 'light')
    window.localStorage.theme = 'light';
});

export default store;
