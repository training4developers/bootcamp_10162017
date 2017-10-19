import * as React from 'react';

export class ColorList extends React.Component {

  render() {
    return <ul>
      {this.props.colors.map(color => <li>{color.name} - {color.hexCode}</li>)}
    </ul>;
  }
}