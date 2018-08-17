import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Information extends React.Component {
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
    let style = this.props.style;

    return (
      <div id="contain-information">
        <div
          id="information"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onClick={this.props.setModal}
          style={this.props.style}
        >
          {!this.props.theme && <i className="fas fa-question-circle" />}
          {this.props.theme && <i className="far fa-question-circle" />}

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
              <div className="message" style={style} >
                About this project
            </div>
            </CSSTransition>
          }
        </div>
      </div>
    );
  }
}

export default Information;