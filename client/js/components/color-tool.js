import * as React from 'react';

import { ToolHeader } from './tool-header';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorList: props.colorList.concat(),
      newColorName: '',
      newColorHexCode: '#000000',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [ e.target.name ]: e.target.value });
  }

  onClick = () => {
    this.setState({
      colorList: this.state.colorList.concat({
        name: this.state.newColorName,
        hexCode: this.state.newColorHexCode,
      }),
      newColorName: '',
      newColorHexCode: '#000000',
    });
  };

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {this.state.colorList.map(color => <li>{color.name} - {color.hexCode}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="new-color-name-input">New Color Name:</label>
          <input type="text" id="new-color-name-input" name="newColorName"
            value={this.state.newColorName} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="new-color-hex-code-input">New Color Hex Code:</label>
          <input type="color" id="new-color-hex-code-input" name="newColorHexCode"
            value={this.state.newColorHexCode} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;
  }
}