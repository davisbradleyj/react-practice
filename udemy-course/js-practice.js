// Let and Const

let myName = 'Max';
console.log(myName);

myName = 'Manu';
console.log(myName);

// Arrow Functions

function myFunc1() {
  console.log('Arrow')
}

const myFunc2 = () => { // no more issues with 'this' keyword, keeps 'this' context
  console.log('New Arrow')
}

function printMyName1(name) {
  console.log(name);
}
printMyName1('Brad');

const printMyName2 = (name) => {
  console.log(name);
}
printMyName1('Brad');

// Classes 

class Human {
  // constructor() {
  gender = 'male';
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  // constructor() {
  //   super(); // necessary to access parent functions
    name = 'Brad';
    gender = 'fluid';
  
  printMyName = () => {
    console.log(this.name)
  }
}

const person = new Person();
person.printMyName();
person.printGender();


// Spread and Rest Operator

