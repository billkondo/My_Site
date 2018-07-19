import React from 'react';
import TicTacToe from './TicTacToe/TicTacToe';
import ReactCalculator from './ReactCalculator/ReactCalculator';
import DrumMachine from './DrumMachine/DrumMachine';
import PomodoroClock from './PomodoroClock/PomodoroClock';
import { connect } from 'react-redux';

class projects extends React.Component {
  render() {
    let style = {}

    if (this.props.theme)
      style.opacity = "0.75";

    return (
      <div id="projects">
        <TicTacToe  style={style}/>
        <ReactCalculator style={style}/>
        <DrumMachine style={style}/>
        <PomodoroClock style={style}/>
      </div>
    );
  }
}

const Projects = connect(
  (state) => ({
    theme: state.theme.theme
  })
)(projects);



export default Projects;