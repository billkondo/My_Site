import React from 'react';
import Description from './../Description/Description';
import { Redirect } from 'react-router-dom';

class ReactCalculator extends React.Component {
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
      return <Redirect push to='/ReactCalculator' />

    return (
      <div id="react-calculator"
        onMouseEnter={this.flipState}
        onMouseLeave={this.flipState}
        onClick={this.triggerClick}
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