function add(numbers) {
  if (!numbers) return 0;

  // split by comma or newline
  const parts = numbers
    .split(/,|\n/)
    .map((n) => parseInt(n, 10))
    .filter((n) => !Number.isNaN(n));
  return parts.reduce((s, n) => s + n, 0);
}

module.exports = { add };
