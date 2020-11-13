// Strict Mode --- need to the first line of code in order for Strict Mode to work
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive -).');
// const interface = 'Audio'; //SyntaxError: Unexpected strict mode reserved word
// const private = 543;

// FUNCTIONS
function logger() {
    console.log('My name is Sky.');
}
// calling/running/invoking function later
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const orangeJuice = fruitProcessor(5, 0);
console.log(orangeJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declarations (either one is okay, personal preference)
function calcAge1(birthYear) {
    return 2020 - birthYear;
};
const age1 = calcAge1(1990);
console.log(age1);

// Function Expressions (define function, then call it later, more clear coding)
const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}
const age2 = calcAge2(1990);
console.log(age2);

// Arrow functions (do not get this keyword)
// => means "function(birthYear: any): number"
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearUntilRetirement(1990, 'Sky'));

// functions calling other functions
// for example, we need to cut fruits to small pieces first

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// const cutPieces = function (fruit) {
//     return fruit * 4;
// }
// const fruitProcessor2 = function (apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor2(2, 3));

// Reviewing Functions
const calcAge4 = function (birthYear3) {
    return 2020 - birthYear3;
}

const yearUntilRetirement2 = function (birthYear3, firstName) {
    const age4 = calcAge4(birthYear3);
    const retirement2 = 65 - age4;

    if (retirement2 > 0) {
        console.log(`${firstName} retires in ${retirement2} years.`)
        return retirement2;
    } else {
        console.log(`${firstName} has already retired.`)
        return -1; // use ALT + downarrow to move
    }

    // return `${firstName} retires in ${retirement2} years.`;
}
console.log(yearUntilRetirement2(1988, 'Sky'));
console.log(yearUntilRetirement2(1950, 'Garry'));

/* Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
1, To calculate average of 3 values, add them all together and divide by 3
2, To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/
const calcAverage = (a, b, c) => (a + b + c) / 3;
// Test 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Team Dolphins wins 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Team Koalas wins 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins.');
    }
}
checkWinner(avgDolphins, avgKoalas);
// Test 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);


// Arrays
const friend1 = 'Michael';
const friend2 = 'Misty';
const friend3 = 'Lucie';

const friends = ['Michael', 'Misty', 'Lucie'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // impressions in []

// friends[0] = 'Colleen';
console.log(friends);

const firstName = 'Sky';
const sky = [firstName, 'Jillain', 2020 - 1990, 'Software Developer', friends];
console.log(sky);

// Array exercise
const calcAge5 = function (birthYear5) {
    return 2020 - birthYear5;
}
const years2 = [1990, 1967, 2002, 2010, 2018];

const age7 = calcAge5(years2[0]);
const age8 = calcAge5(years2[1]);
const age9 = calcAge5(years2[years2.length - 1]);
const ages = [calcAge5(years2[0]), calcAge5(years2[1]), calcAge5(years2[years2.length - 1])];
console.log(ages);

// Array Operations(methods)
const friends1 = ['Michael', 'Misty', 'Lucie'];
//friends1.push('Sunny');
const newLength = friends1.push('Sunny');  //add to end
console.log(friends1);

friends1.unshift('Amy');                   //add to begining
console.log(friends1);

friends1.pop();                           // remove the end
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift();
console.log(friends1);

console.log(friends1.indexOf('Misty'));
console.log(friends1.indexOf('Kevin'));

friends1.push(23);
console.log(friends1.includes('Misty'));
console.log(friends1.includes('Kevin'));
console.log(friends1.includes(23));

if (friends1.includes('Misty')) {
    console.log('You have a friend called Misty');
}

/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/
// const bills = [125, 555, 44];
// const calcTip = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

// const total = bills + calcTip;
// console.log(calcTip, total);
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill *0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

//Objects
const skyArray = [
    'Hui',
    'Jillain',
    2020 - 1990,
    'Software Developer',
    ['Kevin', 'Chris', 'Bob']
];

const hui = { // 5 properties; in {} to define new objects
    firstName: 'Sky',
    lastName: 'Jillain',
    age: 2020 - 1990,
    job: 'Software Developer',
    friends: ['Kevin', 'Chris', 'Bob'],
};
console.log(hui);

//Dot vs. Bracket Notation
console.log(hui.lastName);
console.log(hui['job']);

const nameKey = 'Name';
console.log(hui['first' + nameKey]);
console.log(hui['last' + nameKey]);

const interestedIn = prompt('What do you want to know about hui? Choose between firstName, lastName, age, job and friends');
console.log(hui[interestedIn]);

if (hui[interestedIn]) {
    console.log(hui[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}
hui.location = 'Calgary';
hui['twitter'] = '@huijillain';
console.log(hui);

//challenge
//"Hui has 3 friends, and her best friend is called Lucie"

// console.log(hui.firstName, 'has', friends.length, 'friends, and her best friend is called', friends[2]);
console.log(`${hui.firstName} has ${friends.length} friends, and his best friend is called ${friends[2]}`);

//google search "mdn operator precedence", check table

const hui2 = { // 5 properties; in {} to define new objects
    firstName: 'Sky',
    lastName: 'Jillain',
    age: 2020 - 1990,
    job: 'Software Developer',
    friends: ['Kevin', 'Chris', 'Bob'],
    hasDriversLicense: true,

    calcAge8: function (birthYear4) {  //this is impression, property holds function value
        return 2020 - birthYear4;
    }
};

console.log(hui2.calcAge8(1996));
// console.log(hui2['calcAge8'](1996));

//this method
const hui3 = {
    firstName: 'Sky',
    lastName: 'Jillain',
    birthYear5: 1990,
    job: 'Software Developer',
    friends: ['Kevin', 'Chris', 'Bob'],
    hasDriversLicense: false,

    calcAge9: function () {
        // console.log(this);
        return 2020 - this.birthYear5;

        // this.age = 2020 - this.birthYear5;
        // return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge9()}-year-old ${hui3.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(hui3.calcAge9());

//Challenge
//"Sky is a 30-year-old Software Develooper, and he has a/no driver's license."
console.log(hui3.getSummary()); //line330-333, then line 346

/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI.
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/
const mark = {
    fullName: 'Mark Miller',
    mess: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mess / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mess: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mess / (this.height * this.height);
        return this.bmi;
    }
};
mark.calcBMI();  // I missed this line
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi} is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

// For Loop
// console.log('Lifting weights repetition 1');
// ...
// console.log('Lifting weights repetition 5');

for (let rep = 1; rep <= 10; rep++) {
    // console.log('Lifting weights repetition ', rep);
    console.log(`Lifting weights repetition ${rep} 🥋`)
}

const jason = [
    'jay',
    'Smith',
    2020 - 1988,
    'Instructor',
    ['Kevin', 'Scott', 'Adam'],
    true
];
const types = [];
// console.log(jason[0])
// ...
// console.log(jason[4])
for (let i = 0; i < jason.length; i++) {
    // reading from jason array
    console.log(jason[i], typeof jason[i]);

    // Filling types array
    // types[i] = typeof jason[i];
    types.push(typeof jason[i]);
}
console.log(types);

const years1 = [1991, 2007, 1969, 2020];
const ages1 = [];
for (let y = 0; y < years1.length; y++) {
    ages1.push(2020 - years1[y]);
}
console.log(ages1);

// continue and break
console.log('--- ONLY STIRNGS ---')
for (let z = 0; z < jason.length; z++) {
    if (typeof jason[z] !== 'string') continue;
    console.log(jason[z], typeof jason[z]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let z = 0; z < jason.length; z++) {
    if (typeof jason[z] === 'number') break;
    console.log(jason[z], typeof jason[z]);
}

// Looping backwards
const kevin = [
    'Kevin',
    'McM',
    2020 - 1973,
    'Manager',
    ['Jason', 'Michael', 'Scott']
];
for (let i = kevin.length - 1; i >= 0; i--) {
    console.log(i, kevin[i]);
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🥇`);
    }
}

// While Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep} 🥇`);
}
//below is the same as line 461-463 but using while loop
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weight repetition ${rep} 🥇`);
    rep++;
}
//another example
// let dice = Math.random() * 6;
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}

/* Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/
const calcTip1 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
    const tip = calcTip1(bills1[i]);
    tips1.push(tip);
    totals1.push(tip + bills1[i]);
}
console.log(bills1, tips1, totals1);

const calcAverage2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    // console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage2([2, 3, 7])); //just to check function works
console.log(calcAverage2(totals1));
console.log(calcAverage2(tips1));
