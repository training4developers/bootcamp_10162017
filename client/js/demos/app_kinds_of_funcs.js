
// call-site this functions

// function declaration
function doIt() {
}

// function expressions
const doIt2 = function() {

};

// lexical-this functions

// arrow functions
const doIt3 = () => {
  console.log('did it');
};

const person = {
  fn: 'Mahatma',
  ln: 'Ghandi'
};

Object.freeze(person);

let person2 = person;

//person.ln = 'Smith'; // not allowed

person2.ln = 'Smith'; // this is allowed

console.log(person.ln);