const smallestMultiple = require("../smallest-multiple");

it("2520 is the smallest positive number that is evenly divisible by all of the numbers from 1 to 10", () => {
  expect(smallestMultiple(10)).toBe(2520);
});

// it("232792560 is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20", () => {
//   expect(smallestMultiple(20)).toBe(232792560);
// });
