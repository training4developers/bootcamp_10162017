import keyMirror from 'key-mirror';

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

const createStore = reducer => {

  let currentState;
  const subscribers = [];

  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = reducer(currentState, action);
      subscribers.forEach(cb => cb());
    },
    subscribe: cb => subscribers.push(cb),
  };

};

const appStore = createStore(calcReducer);

appStore.subscribe(() => {
  console.log(appStore.getState());
});

appStore.dispatch(addActionCreator(1));
appStore.dispatch(subtractActionCreator(2));
appStore.dispatch(addActionCreator(3));
appStore.dispatch(subtractActionCreator(4));
appStore.dispatch(addActionCreator(5));

