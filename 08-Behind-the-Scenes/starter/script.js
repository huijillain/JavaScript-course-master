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
