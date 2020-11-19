// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//installing prettier, add .prettierrc to change "  to ' '
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2020 - birthYear;
// added Live Server
// downloaded node.js
// then new terminal in command line
// npm install live-server -g

console.log(calcAge(1990));

// PROBLEM 1:
//We work for a company building a smart home thermometer. out most recent task is this: " Given an array of themperatures of one day, calculate the tgemperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - what is temp amplitude? difference between highest and lowest temp
// - how to compute max and min temperatures?
// - what's a sensor error? what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - substract min from max and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// FUNCTION should now receive 2 arrays of temps

// 1) understand the problem
//- with 2 arrays, should we implement functionnality twice? NO! Just merge 2 arrays

// 2) breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  //   const array1 = ['a', 'b', 'c'];
  //   const array2 = ['d', 'e', 'f'];
  //   const array3 = array1.concat(array2);
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger; //another way to DEBUG by adding this code
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//The Debugging process
//Identify (testing software...)
//FIND
//FIX
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // FIND
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// Identify
console.log(measureKelvin());
//resule is 10273 (10 + 273)
//prompt always return a string value
