import React from 'react';
import Projects from '../components/Projects';
import DrumMachineApp from '../components/DrumMachine/DrumMachineApp';
import ReactCalculatorApp from '../components/ReactCalculator/ReactCalculatorApp';
import PomodoroClockApp from '../components/PomodoroClock/PomodoroClockApp';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

const BodyRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Projects} />
        <Route exact path='/DrumMachine' component={DrumMachineApp} />
        <Route exact path='/ReactCalculator' component={ReactCalculatorApp} />
        <Route exact path='/PomodoroClock' component={PomodoroClockApp} />
        <Route exact path='/TicTacToe'/>
      </Switch>
    </BrowserRouter>
);

export default BodyRouter;