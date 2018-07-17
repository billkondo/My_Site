import React from 'react';
import TicTacToe from './TicTacToe/TicTacToe';
import ReactCalculator from './ReactCalculator/ReactCalculator';
import DrumMachine from './DrumMachine/DrumMachine';
import PomodoroClock from './PomodoroClock/PomodoroClock';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" >
        <TicTacToe />
        <ReactCalculator />
        <DrumMachine />
        <PomodoroClock />
      </div>
    );
  }
}

export default Projects;