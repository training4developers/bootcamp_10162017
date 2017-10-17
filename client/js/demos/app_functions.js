
//import { doIt, showMsg } from './calc.js';

// function doIt(fn) {
//   fn('all done');
// }

// const showMsg = function(msg) {
//   console.log(msg);
// };

// doIt(showMsg);

const doIt = () => {

  return () => {
    console.log('test');
  };
};

doIt()();

const fn = doIt();
fn();