import React from 'react';
import Description from './../Description/Description';
import { Redirect } from 'react-router-dom';

class ReactCalculator extends React.Component {
  state = {
    description: false,
    click: false
  }

  mouseEnter = () =>
    this.setState({
      description: true
    });

  mouseLeave = () =>
    this.setState({
      description: false
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
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={this.triggerClick}
        style={this.props.style}
      >
        {
          this.state.description &&
          <Description
            title={"Calculator"}
            text={`Need to do some calculations ?`}
            tags={['Javascript', 'CSS3', 'React', 'Redux', 'Big.js']}
          />
        }
      </div>
    );
  }
}

export default ReactCalculator;