import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colors = [
  { id: 1, name: 'red', hexCode: '#ff0000' },
  { id: 2, name: 'white', hexCode: '#ffffff' },
  { id: 3, name: 'gold', hexCode: '#ffdf00' },
  { id: 4, name: 'green', hexCode: '#ff8000' },
  { id: 5, name: 'saffron', hexCode: '#ff9933' },
  { id: 6, name: 'blue', hexCode: '#0000ff' },
];

ReactDOM.render(
  <ColorTool colorList={colors} />,
  document.querySelector('main'),
);