import sumMultiples from "../multiple";

it("Find the sum of all the multiples of 3 or 5 below 10", () => {
  expect(sumMultiples(10)).toBe(23);
});

it("Find the sum of all the multiples of 3 or 5 below 20", () => {
  expect(sumMultiples(20)).toBe(78);
});

it("Find the sum of all the multiples of 3 or 5 below 1000", () => {
  expect(sumMultiples(1000)).toBe(233168);
});