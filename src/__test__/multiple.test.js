const sumMultiples = require("../multiple");

it("should find the sum of all the multiples of 3 or 5 below 10", () => {
  expect(sumMultiples(10)).toBe(23);
});

it("should find the sum of all the multiples of 3 or 5 below 20", () => {
  expect(sumMultiples(20)).toBe(78);
});

it("should find the sum of all the multiples of 3 or 5 below 1000", () => {
  expect(sumMultiples(1000)).toBe(233168);
});
