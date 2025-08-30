const { add } = require("../src/stringCalculator");

test('add("") should return 0', () => {
  expect(add("")).toBe(0);
});
test('add("5") should return 5', () => {
  expect(add("5")).toBe(5);
});
test('add("1,2") should return 3', () => {
  expect(add("1,2")).toBe(3);
});
test('add("1,2,3,4") returns 10', () => {
  expect(add("1,2,3,4")).toBe(10);
});
test('handles newlines as delimiters: "1\\n2,3" => 6', () => {
  expect(add("1\n2,3")).toBe(6);
});
