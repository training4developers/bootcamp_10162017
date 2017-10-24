import { actionTypes } from '../action-types';

import { refreshColorsDone } from './refresh-colors';

export const addColorRequest = color => ({ type: actionTypes.ADD_REQUEST, color });

export const addColorDone = color => ({ type: actionTypes.ADD_DONE, color });

export const addColor = color => {

  return dispatch => {

    dispatch(addColorRequest(color));

    return fetch('http://localhost:3010/colors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(color),
    })
      .then(() => fetch('http://localhost:3010/colors'))
      .then(res => res.json())
      .then(colors => dispatch(refreshColorsDone(colors)));

  };

};