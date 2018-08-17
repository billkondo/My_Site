import React from 'react';
import { CSSTransition } from 'react-transition-group';

class GithubLinkProject extends React.Component {
  state = {
    mouseover: false
  }

  mouseEnter = () =>
    this.setState({
      mouseover: true
    });

  mouseLeave = () =>
    this.setState({
      mouseover: false
    });

  render() {
    return (
      <div
        className="github-link-project"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >

        <a href={this.props.url} target='_blank' style={this.props.style}>
          <i className="fab fa-github-square" />
        </a>

        {
          this.state.mouseover &&
          <CSSTransition
            in={true}
            appear={true}
            timeout={800}
            classNames={{
              appear: "animated",
              appearActive: "fadeInDown fast"
            }}
          >
            <div className='message' style={this.props.style}>
              Github Repo
            </div>
          </CSSTransition>
        }
      </div>
    );
  }
}

export default GithubLinkProject;