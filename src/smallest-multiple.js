module.exports = function smallestMultiple(n) {
  let smallestNum = 2;
  while (smallestNum <= Number.MAX_SAFE_INTEGER) {
    for (let i = 2; i <= n; i++) {
      if (!(smallestNum % i === 0)) {
        break;
      }

      if (i === n) {
        return smallestNum;
      }
    }
    smallestNum++;
  }
}
