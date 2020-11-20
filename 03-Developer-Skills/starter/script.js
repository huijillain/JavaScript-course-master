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

    // debugger;   //another way to DEBUG by adding this code
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

/* Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/
// 1) understand the problem
//- Array transformed to string, separated by ...
// - What is the x days? index + 1

// 2) breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index +1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    // str = str + `${arr[i]}ºC in ${i + 1} days ...`;
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(data1);
10;
