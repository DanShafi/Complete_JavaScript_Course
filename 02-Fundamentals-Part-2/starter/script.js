// CODING CHALLENGE 1

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
