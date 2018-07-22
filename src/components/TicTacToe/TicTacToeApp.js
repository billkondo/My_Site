import React from 'react';
import TicTacToe from './App';
import Tools from '../Tools/Tools';
import '../../styles/TicTacToeApp.scss';
import initialize from './tic_tac_toe_script';

const URL = 'https://github.com/billkondo/Web-Development-Training/tree/master/Free-Code-Camp/Tic-Tac-Toe';

class TicTacToeApp extends React.Component {
  componentDidMount() {
    initialize();
  }
  render() {
    return (
      <div className="contain-site tic-tac-toe-app">
        <TicTacToe />
        <Tools url={URL} />
      </div>
    );
  }
}

export default TicTacToeApp;