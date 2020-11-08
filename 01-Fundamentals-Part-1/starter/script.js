/* part 1
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Sky";
let $function = 27;
console.log($function);

let PI = 3.1415;
*/

// part 2
let javascriptIsFun = true;
console.log(javascriptIsFun);

// type of value
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Sky');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// mutate a variable
const birthYear = 1990;

const now = 2020;
const ageSky = now - 1990;
const ageJason = now - 1988;
// 2 ** 3 means 2*2*2 for 3 times
console.log(ageSky, 2 ** 3);

const firstName = 'Sky';
const lastName = 'J';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10;
x++;
console.log(x);

//comparison operators
console.log(ageSky > ageJason);
console.log(ageSky >= 30);
const isFullAge = ageSky >= 30;

// google search MDN operator precedence, developer.mozilla.org, go to the table
// ... - ... is higher than ... > ...
console.log(now - 1991 > now - 2018);

let x1, y;
x1 = y = 25 - 10 - 5; // x = y = 10, x = 10 order is right-to-left
console.log(x, y);

const averageAge = (ageSky + ageJason) / 2;
console.log(ageSky, ageJason, averageAge);

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data: 
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
 */

// const massM = 78, heightM = 1.69;
// const massJ = 92, heightJ = 1.95;

const massM = 95, heightM = 1.88;
const massJ = 85, heightJ = 1.75;
const markBMI = massM / heightM ** 2;
const johnBMI = massJ / (heightJ * heightJ);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// using ${} instead of + ' ' + , be careful: it uses backticks ` `, not quotes' '
const firstName1 = 'Jason';
const job = 'Realtor';
const birthYear1 = 1991;
const year = 2020;

const jason = "I'm " + firstName1 + ', a ' + (year - birthYear1) + ' years old ' + job + '.';
console.log(jason);

const jasonNew = `I'm ${firstName1}, a ${year - birthYear1} years old ${job}!`;
console.log(jasonNew);

console.log(`Use backticks, so you do not need to think of which ' " to use.`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`); // a lot clearer codes!!!

// if & else statements (if else control constructure)
const age1 = 19;
const isOldEnough = age1 >= 18;

if (isOldEnough) {
    console.log('Jason can start driving license 🚗'); // Windows + period to get Emoji.
}

// or we use the one below, a lot clearer
const age = 15;

if (age >= 18) {
    console.log('Jason can start driving license 🚗'); // Windows + period to get Emoji.
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah needs to wait for anotehr ${yearsLeft} years.`);
}

// another example
const birthYear2 = 1991;
let century;
if (birthYear2 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`Century is ${century}.`);

/*
Coding Challenge #2 
Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
*/
const massMark = 78, heightMark = 1.69;
const massJohn = 92, heightJohn = 1.95;
const markBMI2 = massMark / heightMark ** 2;
const johnBMI2 = massJohn / (heightJohn * heightJohn);
// const markHigherBMI2 = markBMI2 > johnBMI2;
// no need to above line anymore as we put is in if ()
console.log(markBMI2, johnBMI2);

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`)
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`)
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(String(23), 23);

// type coercion // the only one does work is +
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3); // answer is 10
console.log('23' + '10' + 3); // answer is 23103
console.log('23' > '18'); // true

let n = '1' + 1; // answer is '11'
n = n - 1;      // - convert string to number
console.log(n);    // answer is 10

console.log('10' - '4' - '3' - 2 + '5');

// 5 falsy values: 0, '', undefined, null, NaN
// any other values are truthy values
console.log(Boolean(0));   //false
console.log(Boolean(undefined));  //false
console.log(Boolean('Sky'));  //true
console.log(Boolean({})); //true

const money = 0;
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job!)");
}  // answer is 'You should get a job!", money is 0 is a falsy value, so if statment is false, that is why answer is else statement.

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED!');
}

// Equality Operators
const age3 = 18;
if (age3 === 18) console.log('You just became an adult -) (strict)');

if (age3 == 18) console.log('You just became an adult -) (loose)');

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);

// if (favourite == 23) {
//     console.log('Cool! 23 is an amazing number!');
// }

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number.')
} else {
    console.log('Number is not 23 or 7.')
}

if (favourite !== 23) console.log('Why not 23?');

// Logical Operators
const hasDriversLicense = true;  //A
const hasGoodVision = true;     //

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;    //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// if (scoreDolphins > scoreKoalas) {
//     console.log('Team Dolphins wins a trophy 🏆!');
// } else if (scoreDolphins < scoreKoalas) {
//     console.log('Team Koalas wins a trophy 🏆!');
// } else {
//     console.log('It is a draw.');
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//     console.log('Team Dolphins wins a trophy 🏆!');
// } else if (scoreDolphins < scoreKoalas) {
//     console.log('Team Koalas wins a trophy 🏆!');
// } else if (scoreDolphins === scoreKoalas){
//     console.log('It is a draw.');
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Team Dolphins wins a trophy!');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Team Koalas wins a trophy!');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both team win the trophy 🏆!');
} else {
    console.log('No team wins the trophy 😠!');
}

// switch statement
const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan course structure.');
        console.log('Go to coding meetup.');
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend -).');
        break;
    default:
        console.log('Not a valid day!');
}

//use if else statements
const day1 = 'sunday';
if (day1 === 'monday') {
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
} else if (day1 === 'tuesday') {
    console.log('Prepare theory videos.');
} else if (day1 === 'wednesday' || day1 === 'thursday') {
    console.log('Write code examples.');
} else if (day1 === 'friday') {
    console.log('Record videos.');
} else if (day1 === 'saturday' || day1 === 'sunday') {
    console.log('Enjoy the weekend -).');
} else {
    console.log('Not a valid day!');
}

// Statements and Expressions
if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Sky';
console.log(`I'm ${2020 - 1990} years old ${me}.`);

// The Conditional (Ternary) Operator
/*
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.
*/
const age4 = 35;
// age4 >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink juice 🥤');

// const drink = age4 >= 18 ? 'wine 🍷 ' : 'juice 🥤 ';
// console.log(drink);

console.log(`I like to drink ${age4 >= 18 ? 'wine 🍷 ' : 'juice 🥤 '}.`); // it is an express inside {}

/* Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
Data 1: Test for bill values 275, 40 and 430
Hints:
1, To calculate 20% of a value, simply multiply it by 20/100 = 0.2
2, Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/
const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const totalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);






























