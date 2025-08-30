function add(numbers) {
  if (numbers === "") return 0;
  const parts = numbers
    .split(",")
    .map((n) => parseInt(n, 10))
    .filter((n) => !Number.isNaN(n));
  return parts.reduce((s, n) => s + n, 0);
}

module.exports = { add };
