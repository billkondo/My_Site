import React from 'react';
import Calculator from './App';
import Tools from '../Tools/Tools';
import '../../styles/ReactCalculatorApp.scss';

const URL = 'https://github.com/billkondo/Web-Development-Training/tree/master/Free-Code-Camp/react-calculator';

const description = 
`
  <p> 
    A <b> Calculator </b> is an userful tool for doing calculations in precise and fast way. In this project, you can 
    use the four basic operations.
  </p>

  <p>
    The upper screen will show the operation chain, and the lower screen, the current value. Press <b> AC </b> to clear all
    the operations, i.e., reset the calculator. The <b> C </b> button will clear the lower screen, i.e., the current value. Use
    the <b> backspace </b> button to erase the last digit of the current value.
  </p>

  <p>
    Building a calculator was a helpful project to starting to learn state management with React. At the same time, it was a 
    good experience to learn the algorithm behind a calculator.
  </p>

  <p>
    This project was developed with: 
  </p>

  <ul>
    <li> HMTL </li>
    <li> CSS3 (Grid) </li>
    <li> Javascript </li>
    <li> React </li>
    <li> Redux </li>
    <li> <a href="https://github.com/MikeMcl/big.js" target="_blank">Big.js</a>, a Javascript library to work with big numbers. </li>
  </ul>
`;


class ReactCalculatorApp extends React.Component {
  render() {
    return (
      <div className="contain-site react-calculator-app">
        <Calculator />
        <Tools 
          url={URL} 
          description={description}
          title={`Calculator`}
        />
      </div>
    );
  }
}

export default ReactCalculatorApp;