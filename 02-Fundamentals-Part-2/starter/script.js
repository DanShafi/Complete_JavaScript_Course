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

const myDetails = {
  name: 'Danish',
  birthYear: 1992,
  profession: 'Software Engineer',
  languages: ['JavaScript', 'React', 'Python'],

  calcAge: function(birthYear) {
    return 2021 - birthYear;
  }
};

console.log(myDetails.calcAge(myDetails.birthYear));