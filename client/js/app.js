import * as React from 'react';
import * as ReactDOM from 'react-dom';
import keyMirror from 'key-mirror';
import { createStore, bindActionCreators } from 'redux';
//import { connect } from 'react-redux';

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







const CalcTool = props => {

  let numberInput;

  return <form>
    <div>
      <label htmlFor="number-input">Number:</label>
      <input type="text" id="number-input" defaultValue={0} ref={input => numberInput = input} />
    </div>
    <div>
      Result: {props.result}
    </div>
    <button type="button" onClick={() =>
      props.add(Number(numberInput.value))}>Add</button>
    <button type="button" onClick={() =>
      props.subtract(Number(numberInput.value))}>Subtract</button>
  </form>;

};


const mapStateToProps = ({ result }) => ({ result });

const mapDispatchToProps = dispatch => bindActionCreators({
  add: addActionCreator,
  subtract: subtractActionCreator,
}, dispatch);

const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {
  
  return PresentationalComponent => {

    return class ContainerComponent extends React.Component {

      constructor(props) {
        super(props);

        this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);
      }

      componentDidMount() {
        this.storeUnsubscribe = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }

      componentWillUnmount() {
        this.storeUnsubscribe();
      }
 
      render() {

        const stateProps = mapStateToPropsFn(this.props.store.getState());

        return <PresentationalComponent {...this.dispatchProps} {...stateProps} />;
      }

    };
  };
};

const CalcToolContainer = connect(mapStateToProps, mapDispatchToProps)(CalcTool);

ReactDOM.render(
  <CalcToolContainer store={appStore} />,
  document.querySelector('main'),
);




