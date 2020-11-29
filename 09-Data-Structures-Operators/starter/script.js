'use strict';

// 1, Destructuring Arrays

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // openingHours: {
//   //   thu: {
//   //     open: 12,
//   //     close: 22,
//   //   },
//   //   fri: {
//   //     open: 11,
//   //     close: 23,
//   //   },
//   //   sat: {
//   //     open: 0, // Open 24 hours
//   //     close: 24,
//   //   },
//   // },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// //we use next line to choose arry 0 & 2, left 1 blank by , ,
// // const [first, , second] = restaurant.categories;
// // console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //Jonas like the trick below
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
// //answer is 8 9 undifined

// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);
// // answer is 8 9 1

// 2, Destructuring Objects
const restaurant = {
  // this is hardcode data, it is useful to set default data like lines 117-118
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      // object in an object
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  //call function above, passing in an object of option
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let r = 111;
let q = 999;
const obj = { r: 23, q: 7, w: 14 };
//  { r, q } = obj;  // SyntaxErrow: unexpected token '=', {} at the beginning, JS expects a code block. Since we can not assign value yet, trick to trap it in () shwoing below.
({ r, q } = obj);
console.log(r, q);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// initially was code below
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);
