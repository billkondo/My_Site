import React from 'react';
import { connect } from 'react-redux';

const alarmLink = "https://www.freesfx.co.uk/rx2/mp3s/5/16901_1461333025.mp3";

const Label = ({ id, label }) => (
  <div id={id}>
    {label}
  </div>
);

const BreakSettings = ({ length, clickIncrement, clickDecrement }) => (
  <div id="break-settings">
    <Label id="break-label" label="Break Length" />
    <div id="control-settings">
      <div id="break-decrement" onClick={() => clickDecrement()}><i className="fas fa-arrow-down" /></div>
      <div id="break-length">{length}</div>
      <div id="break-increment" onClick={() => clickIncrement()}><i className="fas fa-arrow-up" /></div>
    </div>
  </div>
);

const BREAK_SETTINGS = connect(
  (state) => ({
    length: state.pomodoro_clock.breakLength
  }),
  (dispatch) => ({
    clickDecrement: () => dispatch(lengthAction(-1, true)),
    clickIncrement: () => dispatch(lengthAction(+1, true))
  })
)(BreakSettings);

const SessionSettings = ({ length, clickIncrement, clickDecrement }) => (
  <div id="session-settings">
    <Label id="session-label" label="Session Length" />
    <div id="control-settings">
      <div id="session-decrement" onClick={() => clickDecrement()}><i className="fas fa-arrow-down" /></div>
      <div id="session-length">{length}</div>
      <div id="session-increment" onClick={() => clickIncrement()}><i className="fas fa-arrow-up" /></div>
    </div>
  </div>
);

const SESSION_SETTINGS = connect(
  (state) => ({
    length: state.pomodoro_clock.sessionLength
  }),
  (dispatch) => ({
    clickDecrement: () => dispatch(lengthAction(-1, false)),
    clickIncrement: () => dispatch(lengthAction(+1, false))
  })
)(SessionSettings);

const Settings = () => (
  <div id="settings">
    <BREAK_SETTINGS />
    <SESSION_SETTINGS />
  </div>
);

class Control extends React.Component {
  timerUpdate = () => setInterval(() => {
    this.props.timerChange();
  }, 1000);

  playSound = () => {
    const audio = document.getElementById('beep');
    audio.currentTime = 0;
    audio.play();
  }

  clearAudio = () => {
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  }

  componentWillUpdate() {
    if (this.props.timerInSec === 0) {
      if (this.props.running) {
        this.props.flipMode();

        this.playSound();
      }
    }
  }

  render() {
    return (
      <div id="control">
        <div
          id="start_stop"
          onClick={
            () => {
              if (this.props.running)
                clearInterval(this.id);
              else
                this.id = this.timerUpdate();

              this.props.timerTrigger();
            }}
        >
          {!this.props.running && <i className="fas fa-play" />}
          {this.props.running && <i className="fas fa-pause" />}
        </div>

        <div id="reset"
          onClick={
            () => {
              clearInterval(this.id)
              this.clearAudio();
              this.props.resetAll();
            }
          }>
          <i className="fas fa-sync-alt" />
        </div>
      </div>
    );
  }
}

const CONTROL = connect(
  (state) => ({
    running: state.pomodoro_clock.running,
    timerInSec: state.pomodoro_clock.timerInSeconds
  }),
  (dispatch) => ({
    timerTrigger: () => dispatch({ type: 'FLIP' }),
    resetAll: () => dispatch({ type: 'RESET' }),
    timerChange: () => dispatch({ type: 'TIMER_DECREMENT' }),
    flipMode: () => dispatch(({ type: 'FLIP_MODE' }))
  })
)(Control);

const convertTimer = (seconds) => {
  const numberMinutes = Math.floor(seconds / 60);
  const numberSeconds = seconds % 60;

  const Minutes = (numberMinutes < 10) ? "0" + numberMinutes : numberMinutes.toString();
  const Seconds = (numberSeconds < 10) ? "0" + numberSeconds : numberSeconds.toString();

  return `${Minutes}:${Seconds}`;
}

const Timer = ({ length, label }) => (
  <div id="timer">
    <Label id="timer-label" label={label} />
    <div id="time-left">{convertTimer(length)}</div>
    <CONTROL />
  </div>
);

const TIMER = connect(
  (state) => ({
    length: state.pomodoro_clock.timerInSeconds,
    label: state.pomodoro_clock.timerMode ? 'Session' : 'Break'
  })
)(Timer);


const PomodoroClock = () => (
  <div id="pomodoro-clock">
    <Settings />
    <TIMER />
    <audio
      id="beep"
      src={alarmLink}
      volume={1.0}
    />
  </div>
);

// Actions

const lengthAction = (add = 0, isBreak) => ({
  type: 'LENGTH_UPDATE',
  isBreak,
  add
});

export default PomodoroClock;