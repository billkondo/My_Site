import React from 'react';
import TicTacToe from './TicTacToe/TicTacToe';
import ReactCalculator from './ReactCalculator';
import DrumMachine from './DrumMachine/DrumMachine';
import PomodoroClock from './PomodoroClock/PomodoroClock';

const Projects = () => (
  <div id="projects">
    <TicTacToe />
    <ReactCalculator />
    <DrumMachine />
    <PomodoroClock /> 
  </div>
);

export default Projects;