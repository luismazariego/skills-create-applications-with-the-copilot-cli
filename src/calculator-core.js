/**
 * calculator-core.js - core functions for calculator
 * Supported operations:
 *  - add : addition
 *  - sub : subtraction
 *  - mul : multiplication
 *  - div : division (throws on division by zero)
 *  - mod : modulo (throws on modulo by zero)
 *  - pow : exponentiation / power
 *  - sqrt: square root (throws on negative input)
 */

function isNumeric(n) {
  return typeof n === 'number' && Number.isFinite(n);
}

function add(a, b) {
  if (!isNumeric(a) || !isNumeric(b)) throw new TypeError('Operands must be numbers');
  return a + b;
}

function sub(a, b) {
  if (!isNumeric(a) || !isNumeric(b)) throw new TypeError('Operands must be numbers');
  return a - b;
}

function mul(a, b) {
  if (!isNumeric(a) || !isNumeric(b)) throw new TypeError('Operands must be numbers');
  return a * b;
}

function div(a, b) {
  if (!isNumeric(a) || !isNumeric(b)) throw new TypeError('Operands must be numbers');
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function mod(a, b) {
  if (!isNumeric(a) || !isNumeric(b)) throw new TypeError('Operands must be numbers');
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function pow(base, exponent) {
  if (!isNumeric(base) || !isNumeric(exponent)) throw new TypeError('Operands must be numbers');
  return Math.pow(base, exponent);
}

function sqrt(n) {
  if (!isNumeric(n)) throw new TypeError('Operand must be a number');
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

module.exports = { add, sub, mul, div, mod, pow, sqrt };
