'use strict';
// FUNCTION -1
const bookings = [];
//  // ES5 way of adding parameters
// const createBooking = function (flightNum, numPassengers, price) {
//     numPassengers = numPassengers || 1;
//     price = price || 199;

// ES6
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // afater line 12!!!
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('HL123');
createBooking('HL123', 2, 800);
createBooking('HL123', 3);
createBooking('HL123', undefined, 985);

// How passing arguments works: value vs. reference
const flight = 'LH234';
const sky = {
  name: 'Sky Jillain',
  passport: 8765432,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH876';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 8765432) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, sky);
console.log(flight);
console.log(sky);

// Is the same as doing...
const flightNum = flight;
const passenger = sky; // answer is 'Checked in'

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(sky); // now we pass person.passport as well
checkIn(flight, sky); // answer now is 'wrong passport' due to new passport info

// JavaScript can ONLY pass by value.

// FUNTION -2
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// This is higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
