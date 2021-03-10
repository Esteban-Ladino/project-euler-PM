module.exports = function primeByPosition(position) {
  let cont = 0;
  for (let i = 2; i <= Number.MAX_SAFE_INTEGER; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        if (i !== j) break;
        else {
          cont++;
          if (cont === position) return i;
        }
      }
    }
  }
};
