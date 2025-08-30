function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function add(numbers) {
  if (!numbers) return 0;

  let delimiters = /,|\n/;
  // custom delimiter header
  if (numbers.startsWith("//")) {
    const firstLineEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, firstLineEnd); // e.g. ";"
    delimiters = new RegExp(escapeRegExp(delimiterSection));
    numbers = numbers.substring(firstLineEnd + 1);
  }

  const parts = numbers
    .split(delimiters)
    .map((n) => parseInt(n, 10))
    .filter((n) => !Number.isNaN(n));
  return parts.reduce((s, n) => s + n, 0);
}

module.exports = { add };
