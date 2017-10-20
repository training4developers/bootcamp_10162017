import * as React from 'react';
import * as PropTypes from 'prop-types';

import * as CarToolPropTypes from '../utils/car-tool-prop-types';

export class CarFilter extends React.Component {

  static propTypes = {
    initialFilter: PropTypes.shape({
      filterFieldName: PropTypes.oneOf([ 'make', 'model', 'year', 'color', 'price' ]),
      filterFieldValue: CarToolPropTypes.fieldNameAndValueType('filterFieldName').isRequired,
    }),
    onFilter: PropTypes.func,
  };
  
  onKeyUp = () => {
    this.props.onFilter({
      filterFieldName: this.filterFieldNameSelect.value,
      filterFieldValue: this.filterFieldValueInput.value,
    });
  };

  render() {

    return <form>
      <label htmlFor="filter-field-name-select">Filter Field:</label>
      <select id="filter-field-name-select" name="filterFieldName"
        defaultValue={this.props.initialFilter.filterFieldName} ref={ select => this.filterFieldNameSelect = select }>
        <option value="">Select One...</option>
        <option value="make">Make</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
        <option value="color">Color</option>
        <option value="price">Price</option>
      </select>
      <label htmlFor="filter-field-value-input">Filter Value:</label>
      <input type="text" id="filter-field-value-input" name="filterFieldValue" onKeyUp={this.onKeyUp}
        defaultValue={this.props.initialFilter.filterFieldValue} ref={ input => this.filterFieldValueInput = input } />
    </form>;
  }
  
}
  