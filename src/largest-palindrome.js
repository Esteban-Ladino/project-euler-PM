module.exports = function largestPalindrome(){
  let product = 0;
  let largest = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      product = i * j;
      if (product > largest) {
        if (product.toString() === [...product.toString()].reverse().join('')) {
          largest = product;
        }
      }
    }
  }
  return largest;
}
