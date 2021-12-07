/* CODING CHALLENGE 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinScore = calcAverage(85, 54, 41);
const koalasScore = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`The Dolphins win with ${avgDolphins} points!`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`The Kualoas win with ${avgKoalas} points!`);
  } else {
    console.log('Nobody has won.');
  }
};

checkWinner(dolphinScore, koalasScore);
*/

// const friends = ['Amy', 'Simon', 'George'];
// friends.push('Dan');
// console.log(friends);
// friends.unshift('John');
// console.log(friends);

/* CODING CHALLENGE 2

const calcTip = billValue =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

const bills = [122, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
*/

// const myDetails = {
//   name: 'Danish',
//   age: 29,
//   profession: 'Software Engineer',
//   languages: ['JavaScript', 'React', 'Python'],
// };

// console.log(myDetails.languages[1]);


/////////// OBJECT METHODS

// const myDetails = {
//   name: 'Danish',
//   birthYear: 1992,
//   profession: 'Software Engineer',
//   languages: ['JavaScript', 'React', 'Python'],
//   hasDriversLicense: true,

//   calcAge: function(birthYear) {
//     console.log(this.name);
//     return 2021 - birthYear;
//   },

//   getSummary: function() {
//     return `${this.name} is a ${this.calcAge(1992)} year old ${this.profession} 
//     and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//   }
// };

// console.log(myDetails.calcAge(myDetails.birthYear));
// console.log(myDetails.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,

//   calcBMI: function() {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   }
// }

// const john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,

//   calcBMI: function() {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   }
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// console.log(john.bmi);

/////////////LOOPING METHODS

// for (rep = 1; rep <= 10; rep++ ) {
//   console.log(`Countup to lifts starts at ${rep}`)
// };

// const danArr = [
//   'Danish',
//   'Shafi',
//   1992,
//   'Software Engineer',
//   ['React', 'JavaScript', 'SQL']
// ]

// let i;
// for (i = 0; i < danArr.length; i++) {
//   console.log(danArr[i])
// };

// const years = [1991, 1992, 1993, 1994, 1995];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]); 
// }

// console.log(ages);

// let i = 0;
// while (i <= 10) {
//   console.log(i)
//   i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

/////// CODING CHALLENGE 4

// const calcTip = billValue =>
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i])
// }

// console.log(tips);
// console.log(totals);

