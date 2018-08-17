import React from 'react';
import Description from './../Description/Description';
import { Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames={{
          appear: "animated",
          appearActive: "slideInDown"
        }}
      >
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
              tags={['Javascript', 'HTML', 'CSS3', 'React', 'Redux', 'Big.js']}
            />
          }
        </div>
      </CSSTransition>
    );
  }
}

export default ReactCalculator;