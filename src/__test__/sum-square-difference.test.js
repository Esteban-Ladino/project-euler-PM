import { sumSquareDifference } from '../sum-square-difference'

it(`should find the difference between the sum of the squares
 of the first 100 numbers and the square of the sum.`,
() => {
  expect(sumSquareDifference(100)).toBe(25164150)
})
