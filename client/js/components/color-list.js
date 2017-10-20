import * as React from 'react';


export class ColorListItem extends React.Component {

  render() {
    return <li>{this.props.children}</li>;
  }
}

export class ColorList extends React.Component {

  render() {
    return <ul>
      {this.props.colors.map(color =>
        <ColorListItem>{color.name} - {color.hexCode}</ColorListItem>)}
    </ul>;
  }
}