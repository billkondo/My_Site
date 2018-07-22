const defaultState = {
  theme: false
}

const theme = (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_THEME': 
      return {
        ...state, 
        theme: !state.theme
      } 
    
    default:
      return state;
  }
}

export default theme;