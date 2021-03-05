const isMultiple = (num, divider) => num % divider === 0;

module.exports = function sumMultiples(limit) {
  let totalSum = 0;
  for (let i = 1; i < limit; i++) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) {
      totalSum += i;
    }
  }
  return totalSum;
};
