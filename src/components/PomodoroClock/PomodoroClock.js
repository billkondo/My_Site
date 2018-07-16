import React from 'react';
import Description from './../Description/Description';

class PomodoroClock extends React.Component {
  state = {
    description: false
  }

  flipState = () => 
    this.setState((prevState) => {
      return {
        description: !prevState.description
      };
    });

  render() {
    return (
      <div id="pomodoro-clock"
        onMouseEnter={this.flipState}
        onMouseLeave={this.flipState}
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