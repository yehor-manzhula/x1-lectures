/**
 * Strings in boolean\logical context
 */
console.log('\nSTRINGS IN LOGICAL CONTEXT');

console.log('Not empty string is true = ', !!firstString);
console.log('Empty string in false = ', !!'');

console.log('String is greater than string = ', 'aa' > 'ab');
console.log('String is less than string = ', 'aa' < 'ab');

console.log('String is greater than number = ', '90' > 100);
console.log('String is less than number = ', 100 > '90');

console.log('String is greater than number = ', 5 < '10');
console.log('String is less than number = ', 5 > '10a');

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
 * Numbers and booleans
 */
var number = 100,
    booleanOne = true,
    booleanTwo = false,
    sum;

/**
 * All of them will be casted to string
 */
sum = number + booleanOne + booleanTwo;
console.log('Sum when string first', sum);

/**
 * First of them will be casted to number
 * and then to string
 */
sum = booleanOne + booleanTwo + number;
console.log('Sum when number first', sum);

/**
 * All of them will be casted to string
 */
sum = booleanOne + number + booleanTwo;
console.log('Sum number string number', sum);