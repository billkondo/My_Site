import React from 'react';
import Projects from '../components/Projects';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import DrumMachineApp from '../components/DrumMachine/DrumMachineApp'

const BodyRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Projects} />
        <Route path='/DrumMachine' component={DrumMachineApp} />
        <Route path='/TicTacToe'/>
      </Switch>
    </BrowserRouter>
);

export default BodyRouter;