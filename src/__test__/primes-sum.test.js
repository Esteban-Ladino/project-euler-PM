import { primeSum } from "../primes-sum";

it("should find the sum of all the primes below 10.", () => {
  expect(primeSum(10)).toBe(17);
});

// it("should find the sum of all the primes below two million.", () => {
//   expect(primeSum(2000000)).toBe(142913828922);
// });
