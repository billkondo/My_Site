import React from 'react';
import DrumMachine from './App';
import Tools from '../Tools/Tools';
import '../../styles/DrumMachineApp.scss';

const URL = 'https://github.com/billkondo/Web-Development-Training/tree/master/Free-Code-Camp/drum-machine';

const description = 
`
  <p>
    A <a href="https://en.wikipedia.org/wiki/Drum_machine">Drum Machine</a> is an instrument that is becoming
    more and more popular nowadays. 
  </p>

  <p>
    In this project, you can produce a sound by clicking on the buttons or pressing the corresponding keys in 
    the keyboard. At the same time, you are able to control the volume of the instrument and choose beetwen 
    percussion or melody sounds with the mode switch. 
  </p>

  <p>
    Building this project was helpful in the understanding of the React and how to work with sounds in the 
    HTML/Javascript. This project was developed with:
  </p>

  <ul>  
    <li> HTML </li>
    <li> CSS3 (Grid) </li>
    <li> Javascript </li>
    <li> React (UI) </li>
  </ul>
`

class DrumMachineApp extends React.Component {
  render() {
    return (
      <div className="contain-site drum-machine-app">
        <DrumMachine />
        <Tools 
          url={URL}
          title={`Drum Machine`}
          description={description}
        />
      </div>
    );
  }
}

export default DrumMachineApp;