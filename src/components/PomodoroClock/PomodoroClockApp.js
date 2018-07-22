import React from 'react';
import PomodoroClock from './App';
import Tools from '../Tools/Tools';
import '../../styles/PomodoroClockApp.scss';

const URL = 'https://github.com/billkondo/Web-Development-Training/tree/master/Free-Code-Camp/pomodoro-clock';

class PomodoroClockApp extends React.Component {
  render() {
    return (
      <div className="contain-site pomodoro-clock-app">
        <PomodoroClock />
        <Tools url={URL} />
      </div>
    );
  }
}

export default PomodoroClockApp;