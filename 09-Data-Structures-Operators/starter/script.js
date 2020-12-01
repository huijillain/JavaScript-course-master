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

// // 2, Destructuring Objects
// const restaurant = {
//   // this is hardcode data, it is useful to set default data like lines 117-118
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       // object in an object
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   //call function above, passing in an object of option
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // If we need to write a function with lots of parameters, this is very useful when amounts of parameters increase.
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let r = 111;
// let q = 999;
// const obj = { r: 23, q: 7, w: 14 };
// //  { r, q } = obj;  // SyntaxErrow: unexpected token '=', {} at the beginning, JS expects a code block. Since we can not assign value yet, trick to trap it in () shwoing below.
// ({ r, q } = obj);
// console.log(r, q);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // initially was code below
// // const {
// //   fri: { open, close },
// // } = openingHours;
// // console.log(open, close);

// 3,
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // we can use spread operator whatever we otherwise write multiple values separated by comma
console.log(newArr); // answer [1,2,7,8,9]
console.log(...newArr); // answer 1, 2, 7, 8, 9
// whenever we need the element of array individually, we use spread operator. That is useful when we write an array, and we need to pass multiple elements into a funtion.

//add a new menu into menu by expending/adding one into array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy aray
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays mainMenu + StarterMenu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. Not objects
const str = 'Misty';
const letters = [...str, ' ', 'S.'];
console.log(letters);
// console.log(`${...str} Horward); // does not work because we can not put multiple value in {}

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founderedIn: 1990, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// 4, Rest patterns and parameters
const restaurant1 = {
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

  order1: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery1: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta1: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// 1, Distructuring

// SPREAD, because on RIGHT side of =
const arr1 = [1, 2, ...[3, 4]];

// REST, becasue on LEFT side of =
// REST element must be the last element
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // answer 1 2 [3,4,5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2, Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const d = [23, 5, 7];
add(...d);

// The rest parameters serve all remaining unused parameters
// The spread operators write VALUES separated by a comma. The rest pattern write VARIABLE NAMES separated by comma.
restaurant1.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant1.orderPizza('mushrooms');

console.log('----OR----');
// && and ||
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'sky'); // 3
console.log('' || 'sky'); // sky
console.log(true || 0); // ture
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello. Because it is the 1st truthy value in (), will skip falsy value.

// restaurant.numGuests = 0; WHEN guest number is 0, answer is still 10 which is wrong. Answer for it will be later on.
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----');
console.log(0 && 'sky'); // 0
console.log(7 && 'sky'); // sky

console.log('Hello' && 23 && null && 'sky'); // null. It stops at null as it is falsy value.

if (restaurant1.orderPizza) {
  restaurant1.orderPizza('Mushrooms', 'spinach');
}

restaurant1.orderPizza && restaurant1.orderPizza('mushrooms', 'spinach'); // First restaurant1.orderPizza is to check if it exists, 2nd is to add values in it.

// OR operator will return the 1st truthy value or the last value if they are all falsy. line 357
// AND operator will return the 1st falsy value or the last value if all of them are truthy.

// Error above, answer here using guestCorrect
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
