import React from 'react';

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
        borderColor: "#ba312b"
      }

    return (
      <div className="modal">
        <div className="box-modal" ref={node => this.node = node}>
          <div className="header-modal" style={style}>
            About {this.props.title}
          </div>

          <div className="body-modal" dangerouslySetInnerHTML={this.getHTML()} />

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