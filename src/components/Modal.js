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
    return (
      <div className="modal">
        <div className="box-modal" ref={node => this.node = node}>
          <div className="header-modal">
            About {this.props.title}
          </div>  

          <div className="body-modal" dangerouslySetInnerHTML={this.getHTML()} />

          <div className="exit-modal" onClick={this.clickExit} >
            <i className="fas fa-times-circle" />
          </div>

          <div className="footer-modal">
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;