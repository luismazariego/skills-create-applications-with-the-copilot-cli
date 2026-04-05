#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI calculator
 * Supported operations:
 *  - add : addition
 *  - sub : subtraction
 *  - mul : multiplication
 *  - div : division
 *
 * Usage examples:
 *   node src/calculator.js add 2 3    # => 5
 *   node src/calculator.js sub 5 2    # => 3
 *   node src/calculator.js mul 4 6    # => 24
 *   node src/calculator.js div 8 2    # => 4
 */

function usage() {
  console.error('Usage: node src/calculator.js <op> <a> <b>');
  console.error('Operations: add, sub, mul, div');
}

function isNumeric(n) {
  return !isNaN(n) && isFinite(n);
}

const [, , op, aRaw, bRaw] = process.argv;

if (!op || aRaw === undefined || bRaw === undefined) {
  usage();
  process.exit(1);
}

const a = Number(aRaw);
const b = Number(bRaw);

if (!isNumeric(a) || !isNumeric(b)) {
  console.error('Error: both operands must be valid numbers.');
  process.exit(2);
}

let result;
switch (op.toLowerCase()) {
  case 'add':
  case '+':
    result = a + b;
    break;
  case 'sub':
  case '-':
    result = a - b;
    break;
  case 'mul':
  case '*':
  case 'x':
    result = a * b;
    break;
  case 'div':
  case '/':
    if (b === 0) {
      console.error('Error: division by zero is not allowed.');
      process.exit(3);
    }
    result = a / b;
    break;
  default:
    console.error(`Error: unknown operation '${op}'.`);
    usage();
    process.exit(4);
}

// Print result to stdout
console.log(result);
process.exit(0);
