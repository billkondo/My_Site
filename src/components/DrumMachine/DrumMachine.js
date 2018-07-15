import React from 'react';
import Description from './../Description/Description';

class DrumMachine extends React.Component {
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
      <div id="drum-machine"
        onMouseEnter={this.flipState}
        onMouseLeave={this.flipState}
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