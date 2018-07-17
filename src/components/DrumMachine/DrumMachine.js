import React from 'react';
import Description from './../Description/Description';
import { Redirect } from 'react-router-dom';

class DrumMachine extends React.Component {
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
    if (this.state.click) {
      return <Redirect push to='/DrumMachine' />
    }

    return (
      <div id="drum-machine"
        onMouseEnter={this.flipState}
        onMouseLeave={this.flipState}
        onClick={this.triggerClick}
      >
        {
          this.state.description && 
          <Description 
            title={"Drum Machine"}
            text={`Like Music ? `}
            tags={['Javascript', 'CSS3', 'React', 'Audio']}
          />
        }
      </div>
    );
  }
}

export default DrumMachine;