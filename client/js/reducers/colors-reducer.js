import { actionTypes } from './../action-types';

const initialState = { colors: [], showSpinner: false };

export const colorsReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.REFRESH_REQUEST:
      return { ...state, showSpinner: true };
    case actionTypes.REFRESH_DONE:
      return { ...state, colors: action.colors, showSpinner: false };
    default:
      return state;
  }

};