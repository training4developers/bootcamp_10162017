import * as React from 'react';

import { CarFilter } from './car-filter';
import { CarViewRow } from './car-view-row';
import { CarEditRow } from './car-edit-row';

export const CarTable = props => <table>
  <thead>
    <tr>
      <th colSpan="6">
        <CarFilter onFilter={props.onFilterCars} initialFilter={props.initialFilter} />
      </th>
    </tr>
    <tr>
      <th onClick={() => props.onSortCars('make')}>
        <label htmlFor="edit-make-input">Make!</label>
      </th>
      <th onClick={() => props.onSortCars('model')}>
        <label htmlFor="edit-model-input">Model</label>
      </th>
      <th onClick={() => props.onSortCars('year')}>
        <label htmlFor="edit-year-input">Year</label>
      </th>
      <th onClick={() => props.onSortCars('color')}>
        <label htmlFor="edit-color-input">Color</label>
      </th>
      <th onClick={() => props.onSortCars('price')}>
        <label htmlFor="edit-price-input">Price</label>
      </th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {props.cars.map(car =>
      car.id === props.editCarId
        ? <CarEditRow car={car} onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
        : <CarViewRow car={car} onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />
    )}
  </tbody>
</table>;
