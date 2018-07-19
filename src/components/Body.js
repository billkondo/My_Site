import React from 'react';
import BodyRouter from '../routers/BodyRouter';


class Body extends React.Component {
  render() {
    let style = {};

    if (this.props.theme)
      style = {
        backgroundColor: "#222"
      }

    return (
      <div id="body" style={style}>
        <BodyRouter />
      </div>
    );
  }
}

export default Body;