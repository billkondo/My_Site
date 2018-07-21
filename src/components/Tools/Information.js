import React from 'react';

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

    style = {
      ...style, 
      opacity: "1.0"
    }

    return (
      <div 
        id="information"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        style={this.props.style}
      >
        {!this.props.theme && <i className="fas fa-question-circle" /> }
        {this.props.theme && <i className="far fa-question-circle" /> }

        {
          this.state.mouseover && 
          <div className="message" style={style} >
            About this project
          </div>
        }
      </div>
    );
  }
}

export default Information;