console.log('\nSTRINGS');

/**
 * Strings
 */
var firstString  = "Hello ",
    secondString = 'world';

console.log('\nSTRINGS IN NUMERICAL CONTEXT');
/**
 * Operator + will concat strings
 */
console.log('Sum strings = ', firstString + secondString);

/**
 * Other arithmetical operators will produce NaN
 */
console.log('Subtract strings = ', firstString - secondString);

console.log('Multiply strings = ', firstString * secondString);

console.log('Divide strings = ',  firstString / secondString);

console.log('Modulus strings = ', firstString % secondString);

console.log('Greater than two strings = ',  firstString > secondString);

console.log('Less than two strings = ', firstString < secondString);

console.log('Greater than or equal two strings = ', '811' >= '812'); // Compare by charcode

console.log('Less than or equal two strings = ', '811' <= '812'); // Compare by charcode
