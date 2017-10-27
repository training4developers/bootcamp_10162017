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

class First extends React.PureComponent {

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
    return <div>
      {this.props.data.message}
      <Second />
    </div>;
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log('should component update: first');
  //   return nextProps.data !== this.props.data;
  // }

  componentWillReceiveProps(nextProps) {
    console.log('component will receive props: first');
  }

}

let data = { message: 'Hello Class' };

ReactDOM.render(<First data={data} />, document.querySelector('main'));

setTimeout(() => {

  //data.message = 'Bye Class';
  data = { ...data, message: 'Bye Class' };

  console.log('re-rendering...');
  ReactDOM.render(<First data={data} />, document.querySelector('main'));
}, 3000);