import React from 'react';
import { connect } from 'react-redux';
import Big from 'big.js';

const Equals = ({ onClickEquals }) => (
  <div id="equals" className="button" onClick={() => onClickEquals()}>
    =
  </div>
);

const EQUALS = connect(
  (_) => ({}),
  (dispatch) => ({
    onClickEquals: () => dispatch({ type: 'EQUAL' })
  })
)(Equals);

const BackSpace = ({ backspace }) => (
  <div id="backspace" className="button" onClick={() => backspace()}>
    <i className="fas fa-backspace" />
  </div>
);

const BACKSPACE = connect(
  (_) => ({}),
  (dispatch) => ({
    backspace: () => dispatch({ type: 'BACKSPACE' })
  })
)(BackSpace);

const ClearNumber = ({ clear_number }) => (
  <div id="clear-number" className="button" onClick={() => clear_number()}>
    {"C"}
  </div>
);

const CLEAR_NUMBER = connect(
  (_) => ({}),
  (dispatch) => ({
    clear_number: () => dispatch({ type: 'CLEAR_NUMBER' })
  })
)(ClearNumber)

const Decimals = ({ decimals }) => (
  <div id="decimal" className="button" onClick={() => decimals()}>
    .
    </div>
);

const DECIMALS = connect(
  (_) => ({}),
  (dispatch) => ({
    decimals: () => dispatch({ type: 'DECIMAL' })
  })
)(Decimals);

const DisplayInput = ({ input }) => (
  <div id="display">
    {input ? input : "0"}
  </div>
);

const DISPLAY_INPUT = connect(
  (state) => ({ input: state.calculator.value })
)(DisplayInput);

const DisplayExpression = ({ expression }) => (
  <div id="display-expression">
    {expression}
  </div>
);

const DISPLAY_EXPRESSION = connect(
  (state) => ({
    expression: state.calculator.chain
  })
)(DisplayExpression)

const Display = () => {
  return (
    <div id="display-all">
      <DISPLAY_EXPRESSION />
      <DISPLAY_INPUT />
    </div>
  );
}

const Clear = ({ clearAll }) => (
  <div id="clear" className="button" onClick={() => clearAll()}>
    {"AC"}
  </div>
)

const CLEAR = connect(
  (_) => ({}),
  (dispatch) => ({
    clearAll: () => dispatch({ type: 'CLEAR' })
  })
)(Clear)

const OperatorComponent = (PassedComponent) => {
  const Component = connect(
    (_) => ({}),
    (dispatch) => ({
      operation: (type) => dispatch(operationAction(type))
    })
  )(PassedComponent);

  return <Component />;
}

const Addition = ({ operation }) => (
  <div id="add" className="button" onClick={() => operation('+')}>
    <i className="fas fa-plus" />
  </div>
);

const Subtraction = ({ operation }) => (
  <div id="subtract" className="button" onClick={() => operation('-')}>
    <i className="fas fa-minus" />
  </div>
);


const Multiplication = ({ operation }) => (
  <div id="multiply" className="button" onClick={() => operation('*')}>
    <i className="fas fa-times" />
  </div>
);

const Division = ({ operation }) => (
  <div id="divide" className="button" onClick={() => operation('/')}>
    <i className="fas fa-divide" />
  </div>
);


const generateDigitComponent = (indexArgs, nameArgs) => {
  const Digit = ({ index, name, click }) => (
    <div
      id={name}
      className="button"
      onClick={() => click(index)}
    >
      {index}
    </div>
  );

  const DigitComponent = connect(
    (_, ownProps) => ({
      index: ownProps.index,
      name: ownProps.name
    }),
    (dispatch) => ({
      click: (index) => dispatch(digitAction(index))
    })
  )(Digit);

  return <DigitComponent index={indexArgs} name={nameArgs} key={indexArgs} />;
}

const Buttons = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const names =
    [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
    ];

  return (
    <div id="buttons">
      <CLEAR />
      <EQUALS />
      {OperatorComponent(Addition)}
      {OperatorComponent(Subtraction)}
      {OperatorComponent(Multiplication)}
      {OperatorComponent(Division)}
      <DECIMALS />
      <BACKSPACE />
      <CLEAR_NUMBER />

      {
        numbers.map((number) => generateDigitComponent(number, names[number]))
      }
    </div>
  );
}

class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator">
        <Display />
        <Buttons />
      </div>
    );
  }
}

// REDUX 

const operationAction = (op) => ({
  type: 'OPERATION',
  op
})

const digitAction = (digit) => ({
  type: 'NUMBER',
  digit
})

Big.DP = 6;

export default Calculator;

