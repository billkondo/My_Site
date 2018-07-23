import React from 'react';
import PomodoroClock from './App';
import Tools from '../Tools/Tools';
import '../../styles/PomodoroClockApp.scss';

const URL = 'https://github.com/billkondo/Web-Development-Training/tree/master/Free-Code-Camp/pomodoro-clock';

const description = 
`
  <p>
    The <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Pomodoro Technique</a> is an efficient way
    to focus on a task, e.g, studying.
  </p>

  <p>
    In this technique, you define a <b>session</b> length and a <b>break</b> length. First, you concentrate on a task, removing all the distractions
    around. After the end of the session length, you take a break. In this project, whenever the timer reaches 00:00 you will hear an alarm.
  </p>

  <p>
    This project was developed with:
  </p>

  <ul>
    <li> HTML </li>
    <li> CSS3 </li>
    <li> Javascript </li>
    <li> React </li>
    <li> Redux </li>
  </ul>
`;

class PomodoroClockApp extends React.Component {
  render() {
    return (
      <div className="contain-site pomodoro-clock-app">
        <PomodoroClock />
        <Tools 
          url={URL} 
          title={`Pomodoro Clock`}
          description={description}
        />
      </div>
    );
  }
}

export default PomodoroClockApp;