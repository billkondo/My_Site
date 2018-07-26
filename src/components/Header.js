import React from 'react';
import { connect } from 'react-redux';

class Logo extends React.Component {
  render() {  
    let style = {};

    if (this.props.theme) 
      style = {
        backgroundColor: "#FD0E35",
        color: "darkred"
      }

    return (
      <div id="logo" style={style}>
        BK
     </div>
    );
  }
}

class theme extends React.Component {
  state = {
    mouseOver: false
  }

  enter = () =>
    this.setState({
      mouserOver: true
    });

  leave = () =>
    this.setState({
      mouserOver: false
    });

  render() {
    let style = {};

    if (this.props.theme)
      style = {
        color: "#FD0E35"
      }

    return (
      <div
        id="theme-button"
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}
        onClick={this.props.switchTheme}
        style={style}
      >
        {
          this.state.mouserOver &&
          <div className="card" style={style}>
            Day/Night Theme
          </div>
        }
        <div id="icon">
          {!this.props.theme && <i className="fas fa-lightbulb" />}
          {this.props.theme && <i className="far fa-lightbulb" />}
        </div>
      </div>
    );
  }
}

const Theme = connect(
  (state) => ({
    theme: state.theme.theme
  }),
  (dispatch) => ({
    switchTheme: () => dispatch({ type: 'SWITCH_THEME' })
  })
)(theme);

class Github extends React.Component {
  state = {
    mouserOver: false
  }

  enter = () =>
    this.setState({
      mouserOver: true
    });

  leave = () =>
    this.setState({
      mouserOver: false
    });

  render() {
    let style = {};

    if (this.props.theme)
      style = {
        color: "#FD0E35"
      }

    return (
      <div
        id="github-link"
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}
        style={style}
      >
        {
          this.state.mouserOver &&
          <div className="card" style={style}>
            My Github
          </div>
        }

        <a href="https://github.com/billkondo" target="_blank" style={style}> <i className="fab fa-github" /> </a>
      </div>
    );
  }
}

class header extends React.Component {
  render() {
    let style = {};

    if (this.props.theme)
      style = {
        backgroundColor: "#852f31",
        borderColor: "#FD0E35"
      }

    return (
      <div id="header" style={style}>
        <Logo theme={this.props.theme}/>
        <Theme />
        <Github theme={this.props.theme} />
      </div>
    );
  }
}

const Header = connect(
  (state) => ({
    theme: state.theme.theme
  })
)(header);

export default Header;