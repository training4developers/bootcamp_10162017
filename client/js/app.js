import keyMirror from 'key-mirror';

const actionTypes = keyMirror({
  ADD: null,
  SUBTRACT: null,
});

const addActionCreator = value => ({ type: actionTypes.ADD, value });
const subtractActionCreator = value => ({ type: actionTypes.SUBTRACT, value });

const actions = [
  addActionCreator(1),
  subtractActionCreator(2),
  addActionCreator(3),
  subtractActionCreator(4),
  addActionCreator(5),
];

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

const finalState = actions.reduce( calcReducer, undefined );

console.log(finalState);