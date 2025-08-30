const { add } = require("../src/stringCalculator");

test('add("") should return 0', () => {
  expect(add("")).toBe(0);
});
