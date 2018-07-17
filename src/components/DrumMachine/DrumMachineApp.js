import React from 'react';
import DrumMachine from './App';
import '../../styles/DrumMachineApp.scss';


class DrumMachineApp extends React.Component {
  render() {
    return (
      <div className="contain-site drum-machine-app">
        <DrumMachine />
      </div>
    );
  }
}

export default DrumMachineApp;