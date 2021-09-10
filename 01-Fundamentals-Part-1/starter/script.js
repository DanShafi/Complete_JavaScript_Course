// // Values & Variables

// const country = 'UK';
// const continent = 'Europe';
// const population = 65000000;

// console.log(country + continent + population);

// // Data Types

// const isIsland = false;

// // Operator Precedence

// let x;
// let y;

// x = y = 25 - 10 - 5;

// console.log(x, y);

// // Coding Challenge

// const markHeight = 1.88;
// const markWeight = 90;
// const johnHeight = 1.76;
// const johnWeight = 100;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// // Template Literals

// const firstName = 'Dan';
// const age = 28;
// const job = 'Software Engineer';
// const year = 2021;

// const aboutMe = `Hello, my name is ${firstName} and I am ${age}. I am currently training
// to become a ${job} by the end of ${year}!`;

// console.log(aboutMe);

// // Drivers License Challenge

// const ageChecker = driverAge => {
//   if (driverAge < 18) {
//     const yearsLeft = 18 - driverAge;
//     return `Sorry, you cannot drive yet. You have to wait another ${yearsLeft} years.`;
//   }
//   return 'You can drive! :)';
// };

// // Coding Challenge 2

// if (markBMI > johnBMI) {
//   console.log(
//     `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}).`
//   );
// } else {
//   console.log(
//     `Johns's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}).`
//   );
// }

// // TYPE CONVERSION AND COERCION

// const inputYear = '1992';
// const inputYearAsNum = Number(inputYear);
// console.log(inputYear, inputYearAsNum);

// const numAsNum = 1;
// const numAsString = String(numAsNum);
// console.log(numAsNum, numAsString);

// // 5 falsy numbers in JS are: 0, '', undefined, null, NaN

// const money = 0;
// if (money) {
//   console.log('This is a truthy value!');
// } else {
//   console.log('This is a falsy value!');
// }

// // === does not use type coercion, == does.

// const favourite = prompt('What is your favourite number?');

// if (favourite == 23) {
//   console.log('The input was type coerced.');
// } else if (favourite === '23') {
//   console.log('The input is strict.');
// } else {
//   console.log('Nothing to see here.');
// }

// Code Challenge 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88, 91, 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log('The Dolphins have won!');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('The Koalas have won!');
// } else {
//   console.log("It's a draw!");
// }

// SWITCH STATEMENT

// const day = prompt('What day would you like to see?');

// switch (day) {
//   case 'monday':
//     console.log('You are working 8-9');
//     break;
//   case 'tuesday':
//     console.log('You are working 8-8');
//     break;
//   case 'wednesday':
//     console.log('You have a day off!');
//     break;
//   default:
//     console.log('Invalid selection');
// }

// CONDITIONAL OPERATOR (TERNARY)

// const age = 23;
// const check = age >= 18 ? 'true ✅' : 'false';
// console.log(check);

// CODING CHALLENGE 4

const standardTip = 0.15;
const greaterTip = 0.2;
const billAmount = prompt('How much is the bill?');

const calculatedAmount =
  billAmount >= 50 && billAmount <= 300
    ? billAmount * standardTip
    : billAmount * greaterTip;

const billTotal = `The bill was ${billAmount}, the tip was ${calculatedAmount} and the total value is ${Number(
  billAmount
) + Number(calculatedAmount)}.`;

console.log(billTotal);
