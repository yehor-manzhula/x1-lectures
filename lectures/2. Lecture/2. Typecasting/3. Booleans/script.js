console.log('\nBOOLEANS');

/**
 * Boolean
 */
var firstBoolean = false,
    secondBoolean = true;

/**
 * Boolean will cast to numbers in number context
 * where
 * false - 0
 * true - 1
 */
console.log('Sum boolean', firstBoolean + secondBoolean);

console.log('Subtract boolean', firstBoolean - secondBoolean);

console.log('Multiply boolean', firstBoolean * secondBoolean);

console.log('Divide boolean',  firstBoolean / secondBoolean);

console.log('Modulus boolean', firstBoolean % secondBoolean);

console.log('Greater than', firstBoolean > secondBoolean);

console.log('Less than boolean', firstBoolean < secondBoolean);

console.log('Greater than or equal', firstBoolean >= secondBoolean);

console.log('Less than  or equal', firstBoolean <= secondBoolean);
