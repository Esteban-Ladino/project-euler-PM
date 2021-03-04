import { evenFibonacci } from '../even-fibonacci';

it(`should find the sum of the even values 
 in Fibonacci which don't exceed 100`,
() => {
  expect(evenFibonacci(100)).toBe(188);
});

it(`should find the sum of the even values 
 in Fibonacci which don't exceed 4M`,
() => {
  expect(evenFibonacci(4000000)).toBe(4613732);
});

