const { add } = require("../src/stringCalculator");

test('add("") should return 0', () => {
  expect(add("")).toBe(0);
});
test('add("5") should return 5', () => {
  expect(add("5")).toBe(5);
});
