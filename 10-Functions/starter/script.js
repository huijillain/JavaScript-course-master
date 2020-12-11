'use strict';

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
