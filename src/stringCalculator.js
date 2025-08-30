function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function add(numbers) {
  if (!numbers) return 0;

  let delimiterRegex = /,|\n/;
  if (numbers.startsWith("//")) {
    const firstLineEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, firstLineEnd);
    numbers = numbers.substring(firstLineEnd + 1);

    if (delimiterSection.startsWith("[")) {
      // extract all [delim] occurrences
      const matches = [...delimiterSection.matchAll(/\[([^\]]+)\]/g)];
      const delims = matches.map((m) => escapeRegExp(m[1]));
      delimiterRegex = new RegExp(delims.join("|"));
    } else {
      delimiterRegex = new RegExp(escapeRegExp(delimiterSection));
    }
  }

  const parts = numbers
    .split(delimiterRegex)
    .map((n) => parseInt(n, 10))
    .filter((n) => !Number.isNaN(n));

  const negatives = parts.filter((n) => n < 0);
  if (negatives.length)
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);

  const valid = parts.filter((n) => n <= 1000);
  return valid.reduce((s, n) => s + n, 0);
}

module.exports = { add };
