// Values & Variables

const country = 'UK';
const continent = 'Europe';
const population = 65000000;

console.log(country + continent + population);

// Data Types

const isIsland = false;

// Operator Precedence

let x;
let y;

x = y = 25 - 10 - 5;

console.log(x, y);

// Coding Challenge

const markHeight = 1.88;
const markWeight = 90;
const johnHeight = 1.76;
const johnWeight = 100;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
