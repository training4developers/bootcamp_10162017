import * as React from 'react';

export class ColorForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      newColorName: '',
      newColorHexCode: '#000000',
    };
  }

  onChange = e => {
    this.setState({ [ e.target.name ]: e.target.value });
  }

  submitColor = () => {
    this.props.onSubmitColor({
      name: this.state.newColorName,
      hexCode: this.state.newColorHexCode,
    });

    this.setState(this.getInitialState());
  };

  render() {

    return <form>
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
      <button type="button" onClick={this.submitColor}>
        {this.props.submitButtonText}
      </button>
    </form>;
  }

}