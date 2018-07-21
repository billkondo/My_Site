import React from 'react';
import DrumMachine from './App';
import Tools from '../Tools/Tools';
import '../../styles/DrumMachineApp.scss';

const URL = 'https://github.com/billkondo/Web-Development-Training/tree/master/Free-Code-Camp/drum-machine';

class DrumMachineApp extends React.Component {
  render() {
    return (
      <div className="contain-site drum-machine-app">
        <DrumMachine />
        <Tools 
          url={URL}
        />
      </div>
    );
  }
}

export default DrumMachineApp;