import React from 'react';
import Description from './../Description/Description';

class ReactCalculator extends React.Component {
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
      <div id="react-calculator"
        onMouseEnter={this.flipState}
        onMouseLeave={this.flipState}
      >
        {
          this.state.description && 
          <Description 
            title={"Calculator"}
            text={`Need to do some calculations ?`}
            tags={['Javascript', 'CSS3', 'React', 'Redux']}
          />
        }
      </div>
    );
  }
}

export default ReactCalculator;