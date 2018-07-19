import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { connect } from 'react-redux';

class site extends React.Component {
  render() {
    let style = {};

    if (this.props.theme)
      style = {
        backgroundColor: "#222"
      }

    return (
      <div id="site" style={style}>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

const Site = connect(
  (state) => ({
    theme: state.theme.theme
  })
)(site);

export default Site;