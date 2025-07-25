const { isDivisible } = require('./divisor.js'); // Adjust the path as needed
 
test('isDivisible returns true when num1 is divisible by num2', () => {
  expect(isDivisible(10, 2)).toBe(true); // 10 is divisible by 2
  expect(isDivisible(10, 3)).toBe(false); // 10 is not divisible by 3
  expect(isDivisible(-10, 2)).toBe(true); // -10 is divisible by 2
  expect(isDivisible(0, 5)).toBe(true); // 0 is divisible by any non-zero number
});
 
test('isDivisible throws error when dividing by zero', () => {
  expect(() => isDivisible(10, 0)).toThrow('Division by zero is not allowed');
});
