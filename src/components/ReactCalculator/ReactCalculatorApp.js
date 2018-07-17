import React from 'react';
import Calculator from './App';
import '../../styles/ReactCalculatorApp.scss';


class ReactCalculatorApp extends React.Component {
  render() {
    return (
      <div className="contain-site react-calculator-app">
        <Calculator />
      </div>
    );
  }
}

export default ReactCalculatorApp;