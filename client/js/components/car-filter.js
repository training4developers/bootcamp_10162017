import * as React from 'react';

import { BaseForm } from './base-form';

export class CarFilter extends BaseForm {
  
  constructor(props) {
    super(props);

    this.state = { ...props.initialFilter };
  }

  onKeyUp = () => {
    this.props.onFilter({ ...this.state });
  };

  render() {

    return <form>
      <label htmlFor="filter-field-name-select">Filter Field:</label>
      <select id="filter-field-name-select" name="filterFieldName" value={this.state.filterFieldName} onChange={this.onChange}>
        <option value="">Select One...</option>
        <option value="make">Make</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
        <option value="color">Color</option>
        <option value="price">Price</option>
      </select>
      <label htmlFor="filter-field-value-input">Filter Value:</label>
      <input type="text" id="filter-field-value-input" name="filterFieldValue" value={this.state.filterFieldValue}
        onChange={this.onChange} onKeyUp={this.onKeyUp} />
    </form>;
  }
  
}
  