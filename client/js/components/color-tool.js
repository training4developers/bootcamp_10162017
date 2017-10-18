import * as React from 'react';

Exercise #2

1. Add to the Car Tool, a table of cars

2. Columns
  Make
  Model
  Year
  Color
  Price

3. Add two cars, and be sure to fill in of the columns.


export class ColorTool extends React.Component {

  render() {
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        <li>red</li>
        <li>white</li>
        <li>gold</li>
        <li>green</li>
        <li>saffron</li>
        <li>blue</li>
      </ul>
    </div>;
  }
}