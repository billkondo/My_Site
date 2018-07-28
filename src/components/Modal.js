import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends React.Component {
  render() {
    const trackStyle = {
      position: "absolute",
      backgroundColor: "black",
      width: "10px",
      height: "99%",
      borderRadius: "20px",
      right: 0,
      opacity: "0.4",
      "marginTop": "0.4%",
      "marginRight": "1px"
    }

    return (
      <Scrollbars
        thumbSize={100}
        renderTrackVertical={props => <div {...props} style={trackStyle} />}

        renderThumbVertical={props =>
          <div {...props} style={{
            backgroundColor: "#FD0E35",
            borderRadius: "20px",
            cursor: "pointer"
          }} />
        }
      >
        {this.props.children}
      </Scrollbars>
    );
  }
}

class Modal extends React.Component {
  componentWillMount() {
    document.addEventListener('mousedown', this.clickOnWindow, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOnWindow, false);
  }

  clickOnWindow = (e) => {
    if (!this.node.contains(e.target))
      this.props.setModal();
  }

  getHTML = () => ({
    __html: this.props.description
  })

  clickExit = () => this.props.setModal();

  render() {
    let style = {};

    if (this.props.theme)
      style = {
        color: "#d83a2d",
        backgroundColor: "#852f31",
        borderColor: "#FD0E35"
      }

    return (
      <div className="modal">
        <div className="box-modal" ref={node => this.node = node}>
          <div className="header-modal" style={style}>
            About {this.props.title}
          </div>

          <div className="body-modal">
            <CustomScrollbars>
              <div dangerouslySetInnerHTML={this.getHTML()} />
            </CustomScrollbars>
          </div>

          <div className="footer-modal" style={style}>
            <div className="exit-modal" onClick={this.clickExit} style={style}>
              {!this.props.theme && <i className="fas fa-times-circle" />}
              {this.props.theme && <i className="far fa-times-circle" />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;