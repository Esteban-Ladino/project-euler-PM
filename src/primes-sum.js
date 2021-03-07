export const primeSum = (num) => {
  let sum = 0;
  let band = true;
  for (let i = 2; i < num; i++) {
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        band = false;
        break;
      }
    }
    if (band) {
      sum += i;
    }
    band = true;
  }
  return sum;
}