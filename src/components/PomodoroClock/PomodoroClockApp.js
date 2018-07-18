import React from 'react';
import PomodoroClock from './App';
import '../../styles/PomodoroClockApp.scss'

class PomodoroClockApp extends React.Component {
  render() {
    return (
      <div className="contain-site pomodoro-clock-app">
        <PomodoroClock />
      </div>
    );
  }
}

export default PomodoroClockApp;