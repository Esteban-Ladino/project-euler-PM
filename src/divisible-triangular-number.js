export const divisibleTriangularNumber = () => {
  let i = 1;
  let triangleNumber = 0
  let divisors = []

  while (true) {
    for (let j = 1; j <= i; j++) {
      triangleNumber += j
    }
    for (let k = 1; k <= triangleNumber; k++) {
      if (triangleNumber % k === 0) {
        divisors.push(k)
      }
    }
    if ((divisors.length - 1) === 5000) {
      break;
    }
    triangleNumber = 0
    divisors = []
    i++;
  }
  return triangleNumber
}
