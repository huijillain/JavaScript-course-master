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
