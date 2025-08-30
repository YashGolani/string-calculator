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
test('supports custom single-character delimiter: "//;\\n1;2" => 3', () => {
  expect(add("//;\n1;2")).toBe(3);
});
test("throws exception for negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});
test("ignores numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1000,2")).toBe(1002);
});
