import keyMirror from 'key-mirror';
import { createStore, bindActionCreators } from 'redux';

const actionTypes = keyMirror({
  ADD: null,
  SUBTRACT: null,
});

const addActionCreator = value => ({ type: actionTypes.ADD, value });
const subtractActionCreator = value => ({ type: actionTypes.SUBTRACT, value });

const calcReducer = (state = { result: 0 }, action) => {
  switch(action.type) {
    case actionTypes.ADD:
      return { ...state, result: state.result + action.value };
    case actionTypes.SUBTRACT:
      return { ...state, result: state.result - action.value };
    default:
      return state;
  }
};

// const createStore = reducer => {

//   let currentState;
//   const subscribers = [];

//   return {
//     getState: () => currentState,
//     dispatch: action => {
//       currentState = reducer(currentState, action);
//       subscribers.forEach(cb => cb());
//     },
//     subscribe: cb => subscribers.push(cb),
//   };

// };

const appStore = createStore(calcReducer);

appStore.subscribe(() => {
  console.log(appStore.getState());
});

// const bindActionCreators = (actions, dispatch) => {
//   const boundActions = {};
//   Object.keys(actions).forEach(actionKey => {
//     boundActions[actionKey] = (...params) => {
//       dispatch(actions[actionKey](...params));
//     };
//   });
//   return boundActions;
// };

const { add, subtract } = bindActionCreators({
  add: addActionCreator,
  subtract: subtractActionCreator,
}, appStore.dispatch);

add(1);
subtract(2);
add(3);
subtract(4);
add(5);


