import Big from 'big.js';
const errorMessage = "Division By Zero";

const defaultState = {
  chain: [],
  value: "",
  reset: false,
  isLastOperation: false
}

const errorState = {
  chain: [],
  value: errorMessage,
  isLastOperation: false,
  reset: true
}

const addDecimal = (state) => {
  if (state.value === errorMessage)
    return state;

  if (state.reset)
    return {
      ...state,
      reset: false,
      isLastOperation: false,
      value: "0."
    }

  if (state.value.indexOf('.') === -1) {
    if (!state.value)
      return {
        ...state,
        isLastOperation: false,
        value: "0."
      }

    return {
      ...state,
      isLastOperation: false,
      value: state.value.concat('.')
    }
  }

  return state;
}

const removeDigit = (number) => {
  const len = number.length;

  if (number === errorMessage)
    return "";

  if (len) {
    if (number[len - 1] === '.') {
      if (len === 2 && number[len - 2] === '0') return "";
      return number.substr(0, len - 1);
    }

    return number.substr(0, len - 1);
  }

  return number;
}

const getResult = (operations) => {
  if (!operations.length)
    return "0";

  let result = new Big(operations[0].trim());

  for (let i = 1; i + 1 < operations.length; i += 2) {
    switch (operations[i]) {
      case '+': {
        result = result.plus(Big(operations[i + 1].trim()));
        break;
      }

      case '-': {
        result = result.minus(Big(operations[i + 1].trim()));
        break;
      }

      case '*': {
        result = result.times(Big(operations[i + 1].trim()));
        break;
      }

      case '/': {
        if (operations[i + 1].trim() === "0")
          return errorMessage;

        result = result.div(Big(operations[i + 1].trim()));
        break;
      }
    }
  }

  return result.toString();
}

const addOperator = (state, op) => {
  if (state.value === errorMessage)
    return state;

  const len = state.chain.length;

  if (len && state.isLastOperation)
    return {
      ...state,
      chain: state.chain.slice(0, len - 1).concat([op])
    }

  if (state.reset)
    return {
      ...state,
      chain: state.chain.concat(state.value ? ` ${state.value} ` : " 0 ").concat([op])
    }

  if (!state.value) {
    if (getResult(state.chain.concat([" 0 "]).concat([op])) === errorMessage)
      return errorState;

    return {
      chain: state.chain.concat([" 0 "]).concat([op]),
      value: getResult(state.chain.concat([" 0 "]).concat([op])),
      reset: true,
      isLastOperation: true
    }
  }

  if (getResult(state.chain.concat([` ${state.value} `]).concat([op])) === errorMessage)
    return errorState;

  return {
    chain: state.chain.concat([` ${state.value} `]).concat([op]),
    value: getResult(state.chain.concat([` ${state.value} `]).concat([op])),
    reset: true,
    isLastOperation: true
  }
}

const addDigit = (state, digit) => {
  if (state.reset) {
    if (digit)
      return {
        ...state,
        isLastOperation: false,
        reset: false,
        value: `${digit}`
      }

    return {
      ...state,
      value: "",
      reset: false,
      isLastOperation: false
    }
  }

  if (state.value.length || digit)
    return {
      ...state,
      isLastOperation: false,
      value: state.value.concat(`${digit}`)
    }

  return {
    ...state,
    isLastOperation: false
  }
}

const applyEqual = (state) => {
  const number = state.value ? state.value : "0";
 
  if (getResult(state.chain.concat(number)) === errorMessage)
    return errorState;

  return {
    reset: true,
    isLastOperation: false,
    chain: [],
    value: getResult(state.chain.concat(number))
  }
}

const calculator = (state = defaultState, action) => {
  switch (action.type) {
    case 'NUMBER':
      return addDigit(state, action.digit);

    case 'CLEAR':
      return defaultState;

    case 'BACKSPACE':
      return {
        ...state,
        value: !state.reset ? removeDigit(state.value) : state.value,
        isLastOperation: !state.reset ? false : state.isLastOperation
      }

    case 'DECIMAL':
      return addDecimal(state);

    case 'CLEAR_NUMBER':
      return {
        ...state,
        value: "",
        isLastOperation: false,
        reset: false
      }

    case 'OPERATION':
      return addOperator(state, action.op)

    case 'EQUAL':
      return applyEqual(state);

    default:
      return state;
  }
}

export default calculator;