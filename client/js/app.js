import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colors = ['red','white','gold','green','saffron','blue'];

ReactDOM.render(
  <ColorTool colorList={colors} />,
  document.querySelector('main'),
);