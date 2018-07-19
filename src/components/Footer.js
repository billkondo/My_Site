import React from 'react';
import { connect } from 'react-redux';

class footer extends React.Component {
  render() {
    let style = {};

    if (this.props.theme)
      style = {
        backgroundColor: "#852f31",
        borderColor: "#ba312b"
      }

    return (
      <div id="footer" style={style}>
      </div>
    );
  }
}

const Footer = connect(
  (state) => ({
    theme: state.theme.theme
  })
)(footer);

export default Footer;