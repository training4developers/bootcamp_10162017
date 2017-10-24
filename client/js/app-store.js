import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { colorsReducer } from './reducers/colors-reducer';

export const appStore = createStore(
  colorsReducer,
  applyMiddleware(thunk),
);