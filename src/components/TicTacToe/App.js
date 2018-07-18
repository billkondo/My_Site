import React from 'react';

class TicTacToe extends React.Component {
  render() {
    return (
      <div id="tic-tac-toe">
        <div id="table">
          <div id="score">
            <div id="firstPlayerWarning"> Your Turn </div>
            <div id="secondPlayerWarning"> Computer's Turn </div>
            <div className="scoreDisplay" id="firstPlayerScore"></div>
            <div className="scoreDisplay" id="secondPlayerScore"></div>
            <button id="resetAll"></button>
          </div>

          <div id="board">
            <div id="start-menu">
              <div id="question">How many players ?</div>

              <button id="ONE">ONE</button>
              <button id="TWO">TWO</button>
            </div>

            <div id="decision-menu">
              <div id="question">Would you like to play with X or O ?</div>

              <button className="choices">X</button>
              <button className="choices">O</button>

              <button id="backButton">
                <i className="fas fa-long-arrow-alt-left"> Back</i>
              </button>
            </div>

            <div id="game-menu">
              <div className="row">
                <div className="square noselect"></div>
                <div className="square noselect"></div>
                <div className="square noselect"></div>
              </div>

              <div className="row">
                <div className="square noselect"></div>
                <div className="square noselect"></div>
                <div className="square noselect"></div>
              </div>

              <div className="row">
                <div className="square noselect"></div>
                <div className="square noselect"></div>
                <div className="square noselect"></div>
              </div>
            </div>

            <div id="game-end"> Draw !!! </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToe;