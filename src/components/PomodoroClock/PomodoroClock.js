import React from 'react';
import Description from './../Description/Description';
import { Redirect } from 'react-router-dom';

class PomodoroClock extends React.Component {
  state = {
    description: false,
    click: false
  }

  flipState = () => 
    this.setState((prevState) => {
      return {
        description: !prevState.description
      };
    });

  triggerClick = () => 
    this.setState({
      click: true
    });

  render() {
    if (this.state.click)
      return <Redirect push to='/PomodoroClock' />

    return (
      <div id="pomodoro-clock"
        onMouseEnter={this.flipState}
        onMouseLeave={this.flipState}
        onClick={this.triggerClick}
        style={this.props.style}
      >
        {
          this.state.description && 
          <Description 
            title={"Pomodoro Clock"}
            text={`Time to study ?`}
            tags={['Javascript', 'CSS3', 'React', 'Redux', 'Audio']}
          />
        }
      </div>
    );
  }
}

export default PomodoroClock;