import React from 'react';
import TicTacToe from './App';
import Tools from '../Tools/Tools';
import '../../styles/TicTacToeApp.scss';
import initialize from './tic_tac_toe_script';

const URL = 'https://github.com/billkondo/Web-Development-Training/tree/master/Free-Code-Camp/Tic-Tac-Toe';

const description = 
`
  <p> 
    The <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank"> Tic Tac Toe </a> is originally a paper and pencil game, but nowadays you are able 
    to play this game in the computer.
  </p>

  <p>
    In this project, you can choose to play against the computer or against a friend. At the same time, you can see the scores
    of the games.
  </p>

  <p>
    The computer movements are based on a Dynamic Programming Algorithm and this game was developed with:
  </p>

  <ul>
    <li> HTML </li> 
    <li> CSS </li>
    <li> Javascript </li>
    <li> JQuery </li> 
  </ul>
`;

class TicTacToeApp extends React.Component {
  componentDidMount() {
    initialize();
  }
  render() {
    return (
      <div className="contain-site tic-tac-toe-app">
        <TicTacToe />
        <Tools url={URL} title={`Tic Tac Toe`} description={description}/>
      </div>
    );
  }
}

export default TicTacToeApp;