#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI calculator (uses src/calculator-core.js)
 * Supported operations:
 *  - add : addition
 *  - sub : subtraction
 *  - mul : multiplication
 *  - div : division
 */

const { add, sub, mul, div } = require('./calculator-core');

function usage() {
  console.error('Usage: node src/calculator.js <op> <a> <b>');
  console.error('Operations: add, sub, mul, div');
}

const [, , op, aRaw, bRaw] = process.argv;

if (!op || aRaw === undefined || bRaw === undefined) {
  usage();
  process.exit(1);
}

const a = Number(aRaw);
const b = Number(bRaw);

if (!Number.isFinite(a) || !Number.isFinite(b)) {
  console.error('Error: both operands must be valid numbers.');
  process.exit(2);
}

try {
  let result;
  switch (op.toLowerCase()) {
    case 'add':
    case '+':
      result = add(a, b);
      break;
    case 'sub':
    case '-':
      result = sub(a, b);
      break;
    case 'mul':
    case '*':
    case 'x':
      result = mul(a, b);
      break;
    case 'div':
    case '/':
      result = div(a, b);
      break;
    default:
      console.error(`Error: unknown operation '${op}'.`);
      usage();
      process.exit(4);
  }
  console.log(result);
  process.exit(0);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(3);
}
