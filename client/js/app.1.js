import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import { refreshColors } from './actions/refresh-colors';
import { addColor } from './actions/add-color';
import { appStore } from './app-store';
import { ColorTool } from './components/color-tool';

const mapStateToProps = ({ colors, showSpinner }) => ({ colors, showSpinner });

const mapDispatchToProps = dispatch => bindActionCreators({
  refreshColors, addColor 
}, dispatch);

const ColorToolContainer = connect(mapStateToProps, mapDispatchToProps)(ColorTool);

// ReactDOM.render(
//   <Provider store={appStore}>
//     <ColorToolContainer />
//   </Provider>,
//   document.querySelector('main'),
// );