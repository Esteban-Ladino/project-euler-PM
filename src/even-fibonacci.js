module.exports = function evenFibonacci(limit) {
  let a = 2;
  let b = 3;
  let nextNumber = a;
  let sum = nextNumber;

  while (nextNumber < limit) {
    nextNumber = (a + b);
    a = b
    b = nextNumber
    if (nextNumber % 2 !== 0) continue
    sum += nextNumber
  }

  return sum
}
