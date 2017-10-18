

class Person {

  static propTypes = {

  };

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    //this.getFullName = this.getFullName.bind(this);
  }

  getFullName = () => {
    console.log(this.firstName + ' ' + this.lastName);
  }

}

Person.propTypes

const person = new Person('Bob','Smith');
//console.log(person.getFullName());

setTimeout(person.getFullName, 2000);



// const person = { 
//   firstName: 'Bob',
// };

// // const person2 = Object.assign({}, person);
// const person2 = { ...person };

// console.log(person2.firstName);

// console.log(person === person2);