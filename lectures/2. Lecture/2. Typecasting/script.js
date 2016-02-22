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
 * Other arethmetical operators will produce NaN
 */
var subtractString = firstString - secondString;
console.log('subtractString', subtractString);

var multiplyStrings = firstString * secondString;
console.log('multiplyStrings', multiplyStrings);

var divideStrings = firstString / secondString;
console.log('divideStrings', divideStrings );

var modulusStrings = firstString % secondString;
console.log('modulusStrings', modulusStrings);


console.log('\nNUMBERS');

/**
 * Numbers
 */
var firstNumber = 5,
    secondNumber = 10;

var sumNumbers = firstNumber + secondNumber;
console.log('sumNumbers', sumNumbers);

var subtractNumbers = firstNumber - secondNumber;
console.log('subtractNumbers', subtractNumbers);

var multiplyNumbers = firstNumber * secondNumber;
console.log('multiplyNumbers', multiplyNumbers);

var divideNumbers = firstNumber / secondNumber;
console.log('divideNumbers', divideNumbers);

var modulusNumbers = firstNumber % secondNumber;
console.log('modulusNumbers', modulusNumbers);


console.log('\nBOOLEANS');

/**
 * Boolean
 */
var firstBoolean = false,
    secondBoolean = true;

/**
 * In that case boolean will cast to numbers
 * where
 * false - 0
 * true - 1
 */
var sumBoolean = firstBoolean + secondBoolean;
console.log('sumBoolean', sumBoolean);

/**
 * In that case boolean will cast to numbers
 * where
 * false - 0
 * true - 1
 */
var subtractBoolean = firstBoolean - secondBoolean;
console.log('subtractBoolean', subtractBoolean);

/**
 * In that case boolean will cast to numbers
 * where
 * false - 0
 * true - 1
 */
var multiplyBoolean = firstBoolean * secondBoolean;
console.log('multiplyBoolean', multiplyBoolean);

/**
 * In that case boolean will cast to numbers
 * where
 * false - 0
 * true - 1
 */
var divideBoolean = firstBoolean / secondBoolean;
console.log('divideBoolean', divideBoolean);

var modulusBoolean = firstBoolean % secondBoolean;
console.log('modulusBoolean', modulusBoolean);

console.log('\nSTRINGS AND NUMBERS');

/**
 * Strings and numbers
 */
var string = 'test',
    numberOne = 5,
    numberTwo = 10,
    sum;

sum = string + numberOne + numberTwo;
console.log('Sum when string first', sum);

sum = numberOne + numberTwo + string;
console.log('Sum when number first', sum);

sum = numberOne + string + numberTwo;
console.log('Sum number string number', sum);


console.log('\nSTRINGS AND BOLEANS');

/**
 * Strings and booleans
 */
var string = 'TEST',
    booleanOne = true,
    booleanTwo = false,
    sum;

/**
 * All of them will be casted to string
 */
sum = string + booleanOne + booleanTwo;
console.log('Sum when string first', sum);

/**
 * First of them will be casted to number
 * and then to string
 */
sum = booleanOne + booleanTwo + string;
console.log('Sum when number first', sum);

/**
 * All of them will be casted to string
 */
sum = booleanOne + string + booleanTwo;
console.log('Sum number string number', sum);

console.log('\nNUMBERS AND BOLEANS');

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

/**
 * TODO: add objects
 */
