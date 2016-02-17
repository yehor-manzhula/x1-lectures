var a = 11;
b = 2;

/**
 * All operators
 * can be splited in two types
 * 1. Works with 2 values (operands) - they called binary operators
 * 2. Works with 1 value  (operands) - the called unary operators
 */

/**
 * Example of binary mathematiacal operators
 */

var c;

c = a + b; // + - summarize
console.log('c = ', c);

c = a - b; // - subtraction
console.log('c =', c);

c = a * b; // * multiplication
console.log('c = ', c);

c = a / b; // / divison
console.log('c = ', c);

c = a % b; // Modulus
console.log('c = ', c);

/**
 * Unary mathematical operators
 */

var d = 1,
    f = 10,
    e;

/**
 * Increment
 * Increase variable value by one
 */
d++ // The same as d = d + 1;
console.log('d = ', d);

/**
 * Decrement
 * decrease variable value by one
 */
d-- // The same as d = d - 1;
console.log('d = ', d);

/**
 * Decrement and increment can be used
 * as prefix and postfix
 */

/**
 * Prefix usage
 * Code bellow will be the same as
 * var c = d + (f + 1);
 * so prefix usage will first increase/decrease value and
 * then return result value to expression
 */
var c = d + ++f; // prefix increment of value
console.log('c = ', c);


/**
 * Postfix usage
 * Code bellow will be the same as
 * var c = d + f;
 * f = f + 1;
 * so postfix usage will first return current variablue value and
 * then will increase or decrease it
 */
d = 1;
f = 10;
var c = d + f++; // prefix increment of value
console.log('c = ', c);
console.log('f = ', f);