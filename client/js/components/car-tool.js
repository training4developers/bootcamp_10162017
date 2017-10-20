import * as React from 'react';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';

export class CarTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: props.cars.concat(),
      editCarId: 0,
      sortFieldName: '',
      filterFieldName: '',
      filterFieldValue: '',
    };
  }

  get filteredCars() {
    return this.state.cars.filter(c =>
      String(c[this.state.filterFieldName]).includes(this.state.filterFieldValue)
    );
  } 

  get sortedCars() {
    const { sortFieldName: fn } = this.state;
    return this.filteredCars.sort(
      (a,b) => a[fn] < b[fn] ? -1 : ( b[fn] < a[fn] ? 1 : 0 )
    );
  }

  editCar = editCarId => this.setState({ editCarId });

  saveCar = car => {

    let cars;

    if (car.id) {
      const carIndex = this.state.cars.findIndex(c => c.id === car.id);
      cars = [
        ...this.state.cars.slice(0, carIndex),
        car,
        ...this.state.cars.slice(carIndex + 1 ),
      ];
    } else {
      car.id = Math.max(...this.state.cars.map(c => c.id)) + 1;
      cars = this.state.cars.concat(car);
    }

    this.setState({ cars, editCarId: 0 });
  }

  deleteCar = carId => {
    const carIndex = this.state.cars.findIndex(c => c.id === carId);
    this.setState({ cars: [
      ...this.state.cars.slice(0, carIndex),
      ...this.state.cars.slice(carIndex + 1 ),
    ] });
  }

  cancelCar = () => {
    this.setState({ editCarId: 0 });
  }

  sortCars = sortFieldName => this.setState({ sortFieldName });

  filterCars = filter => this.setState(filter);

  onChange() {
    // this
  }

  render() {
    const { filterFieldName, filterFieldValue } = this.state;
    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.sortedCars} editCarId={this.state.editCarId}
        onDeleteCar={this.deleteCar} onEditCar={this.editCar}
        onSaveCar={this.saveCar} onCancelCar={this.cancelCar}
        onSortCars={this.sortCars} onFilterCars={this.filterCars}
        initialFilter={{ filterFieldName, filterFieldValue }}  />
      <CarForm onSubmitCar={this.saveCar} />
    </div>;
  }
}


