module.exports = function largestProduct(num, limit) {
  let adjacentDigits = 0;
  let digitsProduct = 0
  let greatestproduct = 0;

  for (let i = 0; i <= num.length - limit; i++) {
    adjacentDigits = num.substring(i, i+limit);

    digitsProduct = [...adjacentDigits]
      .reduce((acumulator, value) => acumulator * value);

    if (digitsProduct > greatestproduct) {
      greatestproduct = digitsProduct;
    }
  }
  return greatestproduct;
}
