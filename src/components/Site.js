import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { connect } from 'react-redux';

class site extends React.Component {
  componentWillMount() {
    const theme = window.localStorage.theme;
    
    if (theme === 'dark') 
      this.props.switchTheme();
  }

  render() {
    let style = {};

    if (this.props.theme)
      style = {
        backgroundColor: "#222"
      }

    return (
      <div id="site" style={style}>
        <Header />
        <Body theme={this.props.theme} />
        <Footer />
      </div>
    );
  }
}

const Site = connect(
  (state) => ({
    theme: state.theme.theme
  }),
  (dispatch) => ({
    switchTheme: () => dispatch({ type: 'SWITCH_THEME' })
  })
)(site);

export default Site;