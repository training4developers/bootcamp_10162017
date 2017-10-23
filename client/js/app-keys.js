import * as React from 'react';
import * as ReactDOM from 'react-dom';

let counter = 0;

class ListItem extends React.Component {

  constructor(props) {
    super(props);

    this.countIndex = counter++;

    console.log('constructor:', this.countIndex);

    this.state = {
      item: props.item,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('current:', this.props.item, 'next:', nextProps.item);
    // this.setState({
    //   item: nextProps.item,
    // });
  }

  componentWillUnmount() {
    console.log('unmounting:', this.countIndex);
  }

  render() {
    console.log('render:', this.countIndex);
    return <li>props: {this.props.item}, state: {this.state.item}</li>;
  }
}

class UnorderedList extends React.Component {
  render() {
    return <ul>{this.props.items.map( (item) =>
      <ListItem key={car.id} item={item} />)}</ul>;
  }
}

const colors = ['red','green','blue'];


ReactDOM.render(<UnorderedList items={colors} />, document.querySelector('main'));

setTimeout(() => {

  colors.splice(1,1);

  ReactDOM.render(<UnorderedList items={colors} />, document.querySelector('main'));

}, 4000);