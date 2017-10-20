import * as React from 'react';

export class CarEditRow extends React.Component {

  componentDidMount() {
    if (this.car.make) {
      this.car.make.focus();
    }
  }

  render() {
    this.car = { };
    const refInput = input => input && (this.car[input.name] = input);
    return <tr>
      {Object.keys(this.props.car).filter(p => p !== 'id').map(propName => <td key={propName}>
        <input type={typeof this.props.car[propName] === 'number'
          ? 'number' : 'text'} id={ 'edit-' + propName + '-input'} name={propName}
          defaultValue={this.props.car[propName]} ref={refInput} />
      </td>)}
      <td>
        <button type="button" onClick={() =>
          this.props.onSaveCar(Object.keys(this.car).reduce(
            (carToSave, key) => ((carToSave[key] = this.car[key].value), carToSave)
            ,{ id: this.props.car.id }))}>Save</button>
        <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
      </td>
    </tr>;
  }
}
