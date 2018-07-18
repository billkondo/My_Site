import React from 'react';
import TicTacToe from './App';
import '../../styles/TicTacToeApp.scss';
import initialize from './tic_tac_toe_script';

class TicTacToeApp extends React.Component {
  componentDidMount() {
    initialize();
  }
  render() {
    return (
      <div className="contain-site tic-tac-toe-app">
        <TicTacToe />
      </div>
    );
  }
}

export default TicTacToeApp;