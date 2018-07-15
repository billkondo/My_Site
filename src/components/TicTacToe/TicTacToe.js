import React from 'react';
import Description from './../Description/Description';

class TicTacToe extends React.Component {
  state = {
    description: false
  }

  flipState = () => 
    this.setState((prevState) => {
      return {
        description: !prevState.description
      };
    });

  render() {
    return (
      <div id="tic-tac-toe"
        onMouseEnter={this.flipState}
        onMouseLeave={this.flipState}
      >
        {
          this.state.description && 
          <Description 
            title={"Tic Tac Toe"}
            text={`Play a Tic Tac Toe game with the computer or a friend`}
            tags={['Javascript', 'HTML', 'CSS']}
          />
        }
      </div>
    );
  }
}

export default TicTacToe;