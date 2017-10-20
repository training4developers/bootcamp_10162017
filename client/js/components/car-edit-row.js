import * as React from 'react';

import { BaseForm } from './base-form';

export class CarEditRow extends BaseForm {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.car);
  }

  render() {
    return <tr>
      <td>
        <input type="text" id="edit-make-input" name="make" 
          value={this.state.make} onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-model-input" name="model" 
          value={this.state.model} onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-year-input" name="year" 
          value={this.state.year} onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-color-input" name="color" 
          value={this.state.color} onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-price-input" name="price" 
          value={this.state.price} onChange={this.onChange} />
      </td>
      <td>
        <button type="button" onClick={() => this.props.onSaveCar({ ...this.state })}>Save</button>
        <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
      </td>
    </tr>;
  }
}
