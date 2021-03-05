module.exports = function sumSquareDifference(limit) {
  let sum = 0;
  let squaresSum = 0;

  for (let i = 1; i <= limit; i++) {
    squaresSum += Math.pow(i, 2);
    sum += i;
  }

  return Math.pow(sum, 2) - squaresSum;
};
