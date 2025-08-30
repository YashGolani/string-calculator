function add(numbers) {
  if (!numbers) return 0;

  let delimiters = /,|\n/;
  if (numbers.startsWith("//")) {
    const firstLineEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, firstLineEnd);
    delimiters = new RegExp(escapeRegExp(delimiterSection));
    numbers = numbers.substring(firstLineEnd + 1);
  }

  const parts = numbers
    .split(delimiters)
    .map((n) => parseInt(n, 10))
    .filter((n) => !Number.isNaN(n));

  const negatives = parts.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return parts.reduce((s, n) => s + n, 0);
}

// 👇 Add this helper
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = { add };
