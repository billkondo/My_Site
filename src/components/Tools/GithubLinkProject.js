import React from 'react';

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
          <div className='message' style={this.props.style}>
            Github Repo 
          </div>
        }
      </div>
    );
  }
}

export default GithubLinkProject;