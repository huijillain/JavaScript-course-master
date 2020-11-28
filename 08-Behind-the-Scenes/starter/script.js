'use strict';

function calcAge(birthYear) {
  const age = 2020 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`; // here firstName is Sky
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var millenial = true;
      const firstName = 'Steven'; // next line first name will show Steven because JS always read inside block scope first
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str); does not work here as str is called outside the block scope
    // console.log(millenial); if we add var line 11, this console.log will work because it is var, only let & const inside block scope do not work
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Sky';
calcAge(1990);

// Hoisting and TDZ in Practice
console.log(me);
// console.log(job);  error : cannot access 'job before initialization
// console.log(year);

var me = 'Sky';
let job = 'Designer';
const year = 1991;

// functions
console.log(addDecl(2, 3)); //this one got 5, defined
function addDecl(a, b) {
  return a + b;
}

// addExpr & addArrow are in temporary dead zone
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10; try not to use var, easy to have bug
const numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// another example
var c = 1;
let d = 2;
const e = 3;

console.log(c === window.c); //ture
console.log(d === window.d); //false
console.log(e === window.e); //false

// console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2020 - birthYear);
  console.log(this); // undifined here
};
calcAge2(1990);

const calcAgeArrow = birthYear => {
  console.log(2020 - birthYear);
  console.log(this); // window {} here
};
calcAgeArrow(1990);

const sky = {
  year: 1990,
  calcAge3: function () {
    console.log(this);
    console.log(2037 - this.year); //use this keyword to referrence the object
    //this keyword will point to the object that is calling the method
    // this keyword is denamic
  },
};
sky.calcAge3();

const matilda = {
  year: 2017, //a function is a value
};

matilda.calcAge3 = sky.calcAge3;
matilda.calcAge3(); // matilda is calling the method

// const f = sky.calcAge3;
// f(); // Typeerror, f() here is only a function

// new topic
const jay = {
  // this is not a block scope, this is an object, so they are still global scope / window object
  firstName: 'Jay',
  year: 1990,
  calcAge4: function () {
    console.log(this);
    console.log(2037 - this.Year);
  }, // an arrow function does not get this keyword
  greet: () => console.log(`Hey ${this.firstName}`),
}; // here this is undefined
jay.greet();
// the best practice never use arrow function as a method
// can change "() =>" in line 115 to "function()"
//check final 139 isMillenial = function section
// inside a regular function, THIS KEYWORD is undefined
// PAY attention to Solution 2

//arguments keyword, does not use much in moden JavaScript
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

// var addArrow2 = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow2(2, 5, 8);

//Primitives vs. Objects/Reference Types
// JavaScripts primitives are Number, String, Boolean, Undefined, Null, Symbol, BigInt, everything else are objects
// Objects or reference types: object literal, arrays, functions, many more
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me2 = {
  name: 'Kejing',
  age: 25,
};
const friend = me2;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me2);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// object.assign is shallow level, we did not talk about deep clone
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
