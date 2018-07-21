import React from 'react';
import { Link } from 'react-router-dom';
import Information from './Information';
import GithubLinkProject from './GithubLinkProject';
import { connect } from 'react-redux';

class tools extends React.Component {
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
    let style = {};

    if (this.props.theme)
      style = {
        color: "#d83a2d"
      }

    return (
      <div id="tools">
        <div
          id="back-link"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          style={this.props.style}
        >
          <Link to="/" style={style}>
            {!this.props.theme && <i className="fas fa-arrow-alt-circle-left" /> }
            {this.props.theme && <i className="far fa-arrow-alt-circle-left" />}
          </Link>

          {
            this.state.mouseover &&
            <div className="message" style={style}>
              Go Back
            </div>
          }

        </div>
        <Information style={style} theme={this.props.theme}/>
        <GithubLinkProject url={this.props.url} style={style}/>
      </div>
    );
  }
}

const Tools = connect(
  (state) => ({
    theme: state.theme.theme
  })
)(tools);

export default Tools;