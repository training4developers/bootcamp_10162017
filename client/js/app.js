import * as React from 'react';
import * as ReactDOM from 'react-dom';

class ModalDialog extends React.Component {

  constructor(props) {
    super(props);
    this.screenBlockDiv = document.createElement('div');
    this.screenBlockDiv.classList.add('screen-block');
    this.modalDiv = document.createElement('div');
    this.modalDiv.classList.add('modal-dialog');
  }

  showModal = () => {
    if (this.props.showModal) {
      document.body.appendChild(this.screenBlockDiv);
      document.body.appendChild(this.modalDiv);
    } else {
      this.screenBlockDiv.remove();
      this.modalDiv.remove();
    }
  }
  componentWillMount() {
    this.showModal();
  }
  componentWillUpdate() {
    this.showModal();
  }
  componentWillUnmount() {
    this.screenBlockDiv.remove();
    this.screenBlockDiv = null;
    this.modalDiv.remove();
    this.modalDiv = null;
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.modalDiv);
  }
}

class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  showModal = () => this.setState({ showModal: true }, () => this.forceUpdate());
  hideModal = () => this.setState({ showModal: false }, () => this.forceUpdate());
  
  render() {
    return <div>
      <ModalDialog showModal={this.state.showModal}>
        <p>Roses are red, violets are blue...</p>
        <button onClick={this.hideModal}>Close Model</button>
      </ModalDialog>
      <button onClick={this.showModal}>Show Modal</button>
    </div>;
  }

}


ReactDOM.render(<Demo />, document.querySelector('main'));