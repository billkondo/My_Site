import React from 'react';
import Calculator from './App';
import Tools from '../Tools/Tools';
import '../../styles/ReactCalculatorApp.scss';

const URL = 'https://github.com/billkondo/Web-Development-Training/tree/master/Free-Code-Camp/react-calculator';


class ReactCalculatorApp extends React.Component {
  render() {
    return (
      <div className="contain-site react-calculator-app">
        <Calculator />
        <Tools url={URL} />
      </div>
    );
  }
}

export default ReactCalculatorApp;