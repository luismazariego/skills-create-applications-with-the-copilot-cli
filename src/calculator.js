#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI calculator (uses src/calculator-core.js)
 * Supported operations:
 *  - add : addition
 *  - sub : subtraction
 *  - mul : multiplication
 *  - div : division
 *  - mod : modulo
 *  - pow : exponentiation / power
 *  - sqrt: square root
 */

const { add, sub, mul, div, mod, pow, sqrt } = require('./calculator-core');

function usage() {
  console.error('Usage: node src/calculator.js <op> <a> <b>');
  console.error('Operations: add, sub, mul, div, mod, pow, sqrt');
  console.error('Examples:');
  console.error('  node src/calculator.js add 2 3');
  console.error('  node src/calculator.js pow 2 8');
  console.error('  node src/calculator.js sqrt 9');
}

const [, , op, aRaw, bRaw] = process.argv;

if (!op) {
  usage();
  process.exit(1);
}

// sqrt accepts one operand; other ops accept two
let a, b;
if (op.toLowerCase() === 'sqrt') {
  if (aRaw === undefined) {
    console.error('Error: sqrt requires one numeric operand');
    usage();
    process.exit(1);
  }
  a = Number(aRaw);
} else {
  if (aRaw === undefined || bRaw === undefined) {
    usage();
    process.exit(1);
  }
  a = Number(aRaw);
  b = Number(bRaw);
}

if (op.toLowerCase() === 'sqrt') {
  if (!Number.isFinite(a)) {
    console.error('Error: operand must be a valid number.');
    process.exit(2);
  }
} else {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.error('Error: both operands must be valid numbers.');
    process.exit(2);
  }
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
    case 'mod':
    case '%':
      result = mod(a, b);
      break;
    case 'pow':
    case '^':
      result = pow(a, b);
      break;
    case 'sqrt':
      result = sqrt(a);
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
