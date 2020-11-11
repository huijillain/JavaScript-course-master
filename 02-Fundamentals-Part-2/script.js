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





