const { add, sub, mul, div, mod, pow, sqrt } = require('../calculator-core');

describe('calculator core functions', () => {
  test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('multiplies 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('divides 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => div(5, 0)).toThrow('Division by zero');
  });

  test('operands must be numbers', () => {
    expect(() => add('a', 1)).toThrow(TypeError);
    expect(() => sub(1, 'b')).toThrow(TypeError);
    expect(() => mul(null, 2)).toThrow(TypeError);
    expect(() => div(1, undefined)).toThrow(TypeError);
  });

  test('works with floats', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
    expect(div(7.5, 2.5)).toBeCloseTo(3);
  });
});

describe('extended operations: mod, pow, sqrt', () => {
  test('modulo 5 % 2 = 1', () => {
    expect(mod(5, 2)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => mod(5, 0)).toThrow('Modulo by zero');
  });

  test('power 2 ^ 3 = 8', () => {
    expect(pow(2, 3)).toBe(8);
  });

  test('power with negative exponent returns fractional', () => {
    expect(pow(2, -1)).toBeCloseTo(0.5);
  });

  test('square root of 16 = 4', () => {
    expect(sqrt(16)).toBe(4);
  });

  test('square root of negative number throws', () => {
    expect(() => sqrt(-9)).toThrow('Square root of negative number');
  });
});
