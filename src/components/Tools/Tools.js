import React from 'react';
import { Link } from 'react-router-dom';
import Information from './Information';
import GithubLinkProject from './GithubLinkProject';
import Modal from '../Modal';
import { connect } from 'react-redux';

class tools extends React.Component {
  state = {
    mouseover: false,
    displayModal: false
  }

  mouseEnter = () =>
    this.setState({
      mouseover: true
    });

  mouseLeave = () =>
    this.setState({
      mouseover: false
    });

  setModal = () => 
    this.setState((prevState) => {
      return ({
        displayModal: !prevState.displayModal
      });
    })
  

  render() {
    let style = {};

    if (this.props.theme)
      style = {
        color: "#d83a2d"
      }

    return (
      <div id="tools">
        {
          this.state.displayModal &&
          <Modal 
            setModal={this.setModal}
            title={this.props.title}
            description={this.props.description}
          />
        }

        <div
          id="back-link"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          style={this.props.style}
        >
          <Link to="/" style={style}>
            {!this.props.theme && <i className="fas fa-arrow-alt-circle-left" />}
            {this.props.theme && <i className="far fa-arrow-alt-circle-left" />}
          </Link>

          {
            this.state.mouseover &&
            <div className="message" style={style}>
              Go Back
            </div>
          }

        </div>

        <Information 
          style={style} 
          theme={this.props.theme} 
          setModal={this.setModal} 
        />

        <GithubLinkProject url={this.props.url} style={style} />
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