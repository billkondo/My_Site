import React from 'react';
import Description from './../Description/Description';
import { Redirect } from 'react-router-dom';

class TicTacToe extends React.Component {
  state = {
    description: false,
    click: false
  }

  flipState = () => 
    this.setState((prevState) => {
      return {
        description: !prevState.description
      };
    });

  triggetClick = () => 
    this.setState({
      click: true
    });

  render() {
    if (this.state.click)
      return <Redirect push to='/TicTacToe' />

    return (
      <div id="tic-tac-toe"
        onMouseEnter={this.flipState}
        onMouseLeave={this.flipState}
        onClick={this.triggetClick}
        style={this.props.style}
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