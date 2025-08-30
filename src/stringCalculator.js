function add(numbers) {
  if (numbers === "") return 0;
  // single number
  return parseInt(numbers, 10);
}

module.exports = { add };
