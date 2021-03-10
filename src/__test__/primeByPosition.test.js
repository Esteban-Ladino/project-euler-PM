const primeByPosition = require("../primeByPosition");

it("the 6th prime is 13", () => {
  expect(13).toBe(primeByPosition(6));
});

it("the 1001st prime is 7927", () => {
  expect(7927).toBe(primeByPosition(1001));
});

// it("the 10001st prime is 104743", () => {
//   expect(104743).toBe(primeByPosition(10001));
// });
