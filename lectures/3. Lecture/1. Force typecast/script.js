console.log('\nSTRINGS TO NUMBERS');

console.log('Int with parseInt = ', parseInt('5')); // 5
console.log('Float parseFloat = ', parseFloat('10.5')); // 10.5
console.log('Int Number constructor = ', (new Number('10')).valueOf()); // 10

/**
 * Pay attention
 */
console.log('Int and string with parseInt = ', parseInt('5 with a string')); // 5
console.log('Float and string with parseFloat = ', parseFloat('10.5 with a string')); // 10.5
console.log('Int and string with Number constructor = ', (new Number('10 with a string')).valueOf()); // NaN


console.log('STRINGS TO BOOLEANS');

/**
 * Pay attention
 * new Boolean('false')
 */
console.log(new Boolean('false').valueOf()); // true
console.log(new Boolean('true').valueOf()); // true

console.log('Empty string is false = ', !!''); // false
console.log('Not empty string is true = ', !!'test'); // true
/**
 * Equal to
 */
console.log('Empty string is false = ', !!''.length); // false
console.log('Not empty string is true = ', !!'test'.length); // true

/**
 * Parse bool value
 */
console.log(JSON.parse('TRUE'.toLowerCase())); // true
console.log(JSON.parse('FALSE'.toLowerCase())); // false

/**
 * Pay attention in example above
 */
console.log(JSON.parse('TRUE')); // Exception
console.log(JSON.parse('FALSE')); // Exception

/**
 * Possible solution
 */
var boolString = 'TRUE';
console.log('true' === boolString.toLowerCase()); // true


console.log('NUMBERS, BOOLEANS, OBJECTS TO STRING');

console.log('Boolean to string = ', '' + true, '' + false);
console.log('Number to string = ', '' + 10, '' + 3.14);
console.log('Object to string = ', '' + {});

/**
 * Override default object to string realization
 */
var obj = {
    toString: function() {
        return 'THIS IS ';
    }
};

console.log(obj + 'SPARTA!'); // THIS IS SPARTA


console.log('\nNUMBERS TO BOOLEANS');

console.log('Positive int number = ', !!10);  // true
console.log('Negative int number = ', !!-10); // true
console.log('Negative int number = ', !!0);   // false

console.log('Positive int number = ', new Boolean(10).valueOf());  // true
console.log('Positive int number = ', new Boolean(-10).valueOf()); // true
console.log('Positive int number = ', new Boolean(0).valueOf());   // false

console.log('\nBOOLEANS TO NUMBERS');
console.log('true is 1 = ',  0 + true);
console.log('false is 0 = ', 0 + false);

console.log('true  is 1 = ', (new Number(true)).valueOf());  // 1
console.log('false is 0 = ', (new Number(false)).valueOf()); // 0

console.log('\nOBJECTS TO BOOLEANS');
console.log('Object always true', !![], !!{}, !!(new String()), !!(new Number()), !!(new Date())); // true true true true true