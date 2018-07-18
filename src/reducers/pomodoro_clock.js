const defaultState = {
  sessionLength: 25,
  breakLength: 5,
  timerMode: true,
  timerInSeconds: 25 * 60,
  running: false
}

const lengthReducer = (state, action) => {
  if (state.running)
    return state;

  if (action.isBreak) {
    if (state.breakLength + action.add <= 0 || state.breakLength + action.add > 60)
      return state;

    const newTime = (!state.timerMode) ? (state.breakLength + action.add) * 60 : state.timerInSeconds;

    return {
      ...state,
      breakLength: state.breakLength + action.add,
      timerInSeconds: newTime
    }
  }

  if (state.sessionLength + action.add <= 0 || state.sessionLength + action.add > 60)
    return state;

  const newTime = (state.timerMode) ? (state.sessionLength + action.add) * 60 : state.timerInSeconds;

  return {
    ...state,
    sessionLength: state.sessionLength + action.add,
    timerInSeconds: newTime
  }
}

const timerReducer = (state) => {
  return {
    ...state,
    timerInSeconds: state.timerInSeconds - 1
  }
}

const modeReducer = (state) => {
  const newTime = (state.timerMode) ? (state.breakLength * 60) : (state.sessionLength * 60);
  return {
    ...state,
    timerMode: !state.timerMode,
    timerInSeconds: newTime
  }
}

const resetReducer = () => defaultState;

const pomodoro_clock = (state = defaultState, action) => {
  switch (action.type) {
    case 'LENGTH_UPDATE':
      return lengthReducer(state, action);

    case 'FLIP':
      return {
        ...state,
        running: !state.running
      }

    case 'TIMER_DECREMENT':
      return timerReducer(state);

    case 'FLIP_MODE':
      return modeReducer(state);

    case 'RESET':
      return resetReducer();

    default:
      return state;
  }
}

export default pomodoro_clock;