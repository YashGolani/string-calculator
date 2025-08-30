# String Calculator Kata

This project is a **TDD (Test-Driven Development)** implementation of the [String Calculator Kata](https://osherove.com/tdd-kata-1). It demonstrates building functionality step by step using tests.

## Features

- Empty string returns `0`
- Supports comma `,` and newline `\n` delimiters
- Supports custom delimiters:
  - Single character (e.g. `//;\n1;2`)
  - Multiple length delimiters (e.g. `//[***]\n1***2***3`)
  - Multiple delimiters (e.g. `//[*][%]\n1*2%3`)
- Ignores numbers greater than `1000`
- Throws exception on negative numbers (lists all negatives)

## Setup

Clone the repo and install dependencies:

    git clone https://github.com/YashGolani/string-calculator.git
    cd string-calculator
    npm install

## Run Tests

This project uses **Jest** for testing:

    npm test

## Usage Example

    const { add } = require("./src/stringCalculator");

    console.log(add("1,2,3"));          // 6
    console.log(add("//;\n1;2;3"));     // 6
    console.log(add("//[***]\n1***2")); // 3

## Kata Rules Implemented

1. Empty string returns `0`
2. Single number returns that number
3. Two numbers, comma delimited, returns sum
4. Support newlines as delimiters
5. Support custom delimiters
6. Throw error on negative numbers
7. Ignore numbers greater than 1000
8. Support multi-length and multiple delimiters

---
