function add(numbers) {
  if (numbers === "") return 0;

  // handle single number
  if (!numbers.includes(",")) {
    return parseInt(numbers, 10);
  }

  return numbers
    .split(",")
    .map((n) => parseInt(n, 10))
    .reduce((s, n) => s + n, 0);
}

module.exports = { add };
