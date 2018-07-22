import React from 'react';
import Description from './../Description/Description';
import { Redirect } from 'react-router-dom';

class TicTacToe extends React.Component {
  state = {
    description: false,
    click: false
  }

  mouseEnter = () =>
    this.setState({
      description: true
    });

  mouseLeave = () =>
    this.setState({
      description: false
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
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={this.triggetClick}
        style={this.props.style}
      >
        {
          this.state.description &&
          <Description
            title={"Tic Tac Toe"}
            text={`Play a Tic Tac Toe game with the computer or a friend`}
            tags={['Javascript', 'HTML', 'CSS', 'JQuery']}
          />
        }
      </div>
    );
  }
}

export default TicTacToe;