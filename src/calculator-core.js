/**
 * calculator-core.js - core functions for calculator
 * Supported operations:
 *  - add : addition
 *  - sub : subtraction
 *  - mul : multiplication
 *  - div : division (throws on division by zero)
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

module.exports = { add, sub, mul, div };
