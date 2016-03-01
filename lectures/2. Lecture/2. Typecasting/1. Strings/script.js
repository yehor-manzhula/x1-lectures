console.log('\nSTRINGS');

/**
 * Strings
 */
var firstString  = "Hello ",
    secondString = 'world';

/**
 * Operator + will concat strings
 */
var sumStrings = firstString + secondString;
console.log('sumStrings', sumStrings);

/**
 * Other arithmetical operators will produce NaN
 */
var subtractString = firstString - secondString;
console.log('subtractString', subtractString);

var multiplyStrings = firstString * secondString;
console.log('multiplyStrings', multiplyStrings);

var divideStrings = firstString / secondString;
console.log('divideStrings', divideStrings );

var modulusStrings = firstString % secondString;
console.log('modulusStrings', modulusStrings);

