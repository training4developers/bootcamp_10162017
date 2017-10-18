import * as React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newColorName: '',
      newColorHexCode: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [ e.target.name ]: e.target.value });
  }

  render() {

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.props.colorList.map(color => <li>{color}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="new-color-name-input">New Color Name:</label>
          <input type="text" id="new-color-name-input" name="newColorName"
            value={this.state.newColorName} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="new-color-hex-code-input">New Color Hex Code:</label>
          <input type="text" id="new-color-hex-code-input" name="newColotHexCode"
            value={this.state.newColorHexCode} onChange={this.onChange} />
        </div>
      </form>
    </div>;
  }
}