import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colors = [
  { name: 'red', hexCode: '#ff0000' },
  { name: 'white', hexCode: '#ffffff' },
  { name: 'gold', hexCode: '#ffdf00' },
  { name: 'green', hexCode: '#ff8000' },
  { name: 'saffron', hexCode: '#ff9933' },
  { name: 'blue', hexCode: '#0000ff' },
];

ReactDOM.render(
  <ColorTool colorList={colors} />,
  document.querySelector('main'),
);