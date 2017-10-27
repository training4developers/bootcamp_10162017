import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Third extends React.Component {

  constructor(props) {
    super(props);

    console.log('constructor: third');
  }

  componentWillMount() {
    console.log('component will mount: third');
  }
  
  componentDidMount() {
    console.log('component did mount: third');
  }

  componentWillUpdate() {
    console.log('component will update: third');
  }

  componentDidUpdate() {
    console.log('component did update: third');
  }
  

  render() {
    console.log('render: third');
    return 'Content';
  }
  
}

class Second extends React.Component {

  constructor(props) {
    super(props);
    
    console.log('constructor: second');
  }

  componentWillMount() {
    console.log('component will mount: second');
  }

  componentDidMount() {
    console.log('component did mount: second');
  }

  componentWillUpdate() {
    console.log('component will update: second');
  }

  componentDidUpdate() {
    console.log('component did update: second');
  }
  
  
  render() {
    console.log('render: second');
    return <Third />;
  }

}

class First extends React.Component {

  constructor(props) {
    super(props);
    
    console.log('constructor: first');
  }

  componentWillMount() {
    console.log('component will mount: first');
  }

  componentDidMount() {
    console.log('component did mount: first');
  }

  componentWillUpdate() {
    console.log('component will update: first');
  }

  componentDidUpdate() {
    console.log('component did update: first');
  }

  render() {
    console.log('render: first');
    return <Second />;
  }

  shouldComponentUpdate() {
    console.log('should component update: first');
    return true;
  }

}

ReactDOM.render(<First />, document.querySelector('main'));

setTimeout(() => {
  console.log('re-rendering...');
  ReactDOM.render(<First />, document.querySelector('main'));
}, 3000);