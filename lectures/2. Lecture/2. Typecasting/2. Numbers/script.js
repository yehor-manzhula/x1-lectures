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
var sumStrings = firstString + secondString;
console.log('sum strings = ', sumStrings);

/**
 * Other arithmetical operators will produce NaN
 */
var subtractString = firstString - secondString;
console.log('subtract strings = ', subtractString);

var multiplyStrings = firstString * secondString;
console.log('multiply strings = ', multiplyStrings);

var divideStrings = firstString / secondString;
console.log('divide strings = ', divideStrings );

var modulusStrings = firstString % secondString;
console.log('modulus strings = ', modulusStrings);

/**
 * Strings and numbers
 */
console.log('\nSTRINGS AND NUMBERS');

console.log('Sum number and string = ', 5 + 10 + firstString);
console.log('Sum string and number = ', firstString + 5 + 10);

/**
 * Strings and booleans
 */
console.log('\nSTRINGS AND BOOLEANS');

console.log('Sum number and string = ', true + true + firstString);
console.log('Sum string and number = ', firstString + true + true);

/**
 * Numbers and booleans
 */
console.log('\nSTRINGS AND BOOLEANS');

console.log('Sum number and string = ', true + true + 10);
console.log('Sum string and number = ', 10 + true + false);

/**
 * Strings in boolean\logical context
 */
console.log('\nSTRINGS IN LOGICAL CONTEXT');

console.log('Not empty string is true = ', !!firstString);
console.log('Empty string in false = ', !!'');



