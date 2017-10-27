import * as React from 'react';
import * as ReactDOM from 'react-dom';

// React 16 - return an array fragment
const ElementFragments = () => [ <li key={1}>one</li>, <li key={2}>two</li>, ];

// React 16 - return a string
const ElementString = () => 'Hello World!';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
    console.log('error', error, 'info', info);
  }

  render() {
    if (this.state.hasError) {
      return 'An error occurred... :(';
    } else {
      return this.props.children;
    }
  }


}
  

class ErrorComponent extends React.Component {

  render() {
    //throw Error('test error');
    return 'did make it here...';
  }


}


ReactDOM.render(
  <div>
    <h1>Test</h1>
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>
  </div>,
  document.querySelector('main')
);