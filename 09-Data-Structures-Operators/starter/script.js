'use strict';

// 1, Destructuring Arrays

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

/*
  openingHours: {
    thu: {
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
};
*/

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

/* Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game. In this challenge we're gonna work with that data - game variables.

Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: 
First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1,
const [players1, players2] = game.players;
console.log(players1, players2);

//2,
const [gk, fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3,
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4,
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5, !!!how to change name x to draw!!!
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6,
const printGoals = function (...players) {
  // console.log(players);
  console.log(`${players.length} goals were scored.`);
};

// pringGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// pringGoals('Davies', 'Muller');
printGoals(...game.scored);
// printGoals(game.scored);  // This did not work.

// 7,
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// For-of Loop, can still use break or continue
const restaurant2 = {
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

  order2: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery2: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta2: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu2 = [...restaurant2.starterMenu, ...restaurant2.mainMenu];

for (const item of menu) console.log(item); // For-of Loop
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);

//destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log(menu.entries());
console.log(...menu.entries());

// Enhanced Object Literals
const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays1[3]]: {
    // object in an object
    open: 12,
    close: 22,
  },
  [weekdays1[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant3 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals, we can delete : function
  openingHours,
  // openingHours: openingHours,

  order3(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // order3: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  orderDelivery3({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // orderDelivery3: function ({
  //   starterIndex = 1,
  //   mainIndex = 0,
  //   time = '20:00',
  //   address,
  // }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// if (restaurant3.openingHours.mon)
//   console.log(restaurant3.openingHours.mon.open);

//These are two optional properties restaurant3.openingHours & restaurant3.openingHours.mon which we do not know if they exist beforehand. So we use if() to check first
if (restaurant3.openingHours && restaurant3.openingHours.mon)
  console.log(restaurant3.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant3.openingHours.mon?.open); //undifined

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant3.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods: We check if Method exist before we call it.
console.log(restaurant3.order?.(0, 1) ?? 'Method does not exist.'); // exist as I worked on code on Thur.
console.log(restaurant3.orderRisotto?.(0, 1) ?? 'Method does not exist.'); // does not exist as we never order Risotto

// Arrays
const users = [{ name: 'Sky', email: 'guestemail@order.com' }];
console.log(users[0].name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

// continued with line 588
// Looping objects: object keys, values, entries
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

// console.log(`We are open on ${properties.length}days`);
let openStr = `We are open on ${properties.length} days: `;

for (const day1 of Object.keys(openingHours)) {
  openStr += `${day1}, `;
  // console.log(day1);
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/* Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

const game2 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1, array <=> we use .entries
for (const [i, player] of game2.scored.entries())
  console.log(`Goal${i + 1}:  ${player}`);

// 2, object <=> we use Object.entries
const odds = Object.values(game2.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3,
for (const [team, odd] of Object.entries(game2.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game2[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4, in Github

// SETs can never have any duplicate, need to be unique.
// SETs are iterable.
// No index in SET.
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Sky'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); // answer: true
console.log(ordersSet.has('Bread')); // answer: false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // 2nd was ignored as SET need to be unique.
ordersSet.delete('Risotto');
// ordersSet.clear();

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('skyjillain').size);

// Map: is a data structure we use to map value to keys.
// Data is stored in key value pairs in maps.
// In maps, keys can has many types.
// In sets, keys are always strings.
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Now check if map contains certain keys.
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr2 = [1, 2];
rest.set([arr2, 'Test']);
// rest.set([1, 2], 'Test'); //rest.set[1,2] is not the same as line 816, that is why we added line 810
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

// console.log(rest.get([1, 2]));
console.log(rest.get(arr2));

// Maps: Iteration
// Maps are also interable.
// For loop is also for maps.
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz map
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number')
    console.log(`Answer 
  ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3; // for exercise: convert map to array below, so prompt does not pop out every time
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map back to array
console.log([...question]);
console.log([...question.entries()]);
console.log(question.keys()); // can use [...] or without
console.log(question.values());

// Which Data structure to use?
// Sources of Data:
// 1, From the program itself: Data writtren directly in source code (e.g. status messages)
// 2, From the UI: Data input from the user or data written in DOM(e.g. tasks in todo app)
// 3, From exteral sourses: Data fetched for example from web API(e.g. recipe objects) - Application Programming Interface
// Based on Collection of Data, then to Data Structure. If they are simple list, use Arrays or Sets. If they are Key/Value pairs, use Objects or Maps

/* Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
// 1,
// console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2,
gameEvents.delete(64);

// 3,
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// const time2 = [...gameEvents.keys()];
// console.log(time2);
const time2 = [...gameEvents.keys()].pop();
console.log(time2);
console.log(
  `An event happened, on average, every ${time2 / gameEvents.size} minutes`
);

// 4,
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minute}: ${event}`);
}

// Working with strings - Airline exercises
const airline = 'TAP Air Canada';
const plane = 'A320';

console.log(plane[0]); // answer is A
console.log(plane[1]); // answer is 3
console.log(plane[2]); // asnwer is 2
console.log('B737'[0]); // answer is B
console.log(airline.indexOf('r')); // answer is 6
console.log(airline.lastIndexOf('a')); // answer is 13, no difference of A or a. Not case sentive.
console.log(airline.indexOf('Canada')); // answer is 8
console.log(airline.indexOf('canada')); // answer is -1
console.log(airline.slice(4)); // Beginning of 4 and the rest, answer is Air Canada
console.log(airline.slice(4, 7)); // 4-6 NO 7, answer is Air
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // there was a space in front of Canada, that is why we add "+ 1"
console.log(airline.slice(-2)); // the last 2 letters, answer is da
console.log(1, -1); // from 1 to the last letter, answer is "AP Air Canada"

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat -(');
  else console.log('You got lucky -)');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jillain'));
console.log(typeof new String('jillain')); // type is object

// Working with Strings - 2
const airline1 = 'TAP Air Canada';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'sKy';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // the 1st letter will be upperCase, from [1] will be lowerCase
console.log(passengerCorrect);

// Comparing emails
const email = 'service@digital4u.ca';
const loginEmail = '  Service@Digital4U.ca \n';

// const lowerEmail = loginEmail.toLowerCase();
// // Delete white place and \n
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
// console.log(email === normalizedEmail);  // answer is true

// replacing
const priceGB = '£288,97';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// regular expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane3 = 'Airbus A320neo';
console.log(plane3.includes('A320')); // true
console.log(plane3.includes('Boeing')); // false
console.log(plane3.startsWith('Airb')); // true

if (plane3.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  // change all toLowerCase first
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board.');
  } else {
    console.log(' Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Working with strings - Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Sky Jillain'.split(' '));

const [firstName, lastName] = 'Sky Jillain'.split(' ');
const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizedName('jessica ann smith davis');
capitalizedName('jason jillain');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // 25 letters length with + at the front
console.log('sky'.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('sky'.padStart(25, '+').padEnd(30, '+'));

// credit cards
const maskCreditCard = function (number) {
  const string = number + '';
  // take the last 4 digitals here
  const last = string.slice(-4);
  return last.padStart(string.length, '*');
};

console.log(maskCreditCard(4500654367839900));
console.log(maskCreditCard('3324358877'));

// Repeat
const message3 = 'Bad weather... All Departures Delayed...';
console.log(message3.repeat(4));

const planesInline = function (number) {
  console.log(`There are ${number} planes in line ${'✈'.repeat(number)}`);
};
planesInline(5);
planesInline(11);
