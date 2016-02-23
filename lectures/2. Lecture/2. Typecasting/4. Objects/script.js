console.log('\nOBJECTS');

/**
 * Objects
 */
var firstObject = {};
var secondObject = {};

console.log('Sum objects', firstObject + secondObject);

console.log('Subtract objects', firstObject - secondObject);

console.log('Multiply objects', firstObject * secondObject);

console.log('Divide objects', firstObject / secondObject);

console.log('Modulus objects', firstObject % secondObject);

console.log('Greater than', firstObject > secondObject);

console.log('Less than boolean', firstObject < secondObject);

console.log('Greater than or equal', firstObject >= secondObject);

console.log('Less than  or equal', firstObject <= secondObject);

console.log('\n');

/**
 * Objects
 */
firstObject = {
    valueOf: function() {
        return 10;
    },
    toString: function() {
        return 'firstObject'
    }
};

secondObject = {
    valueOf: function() {
        return 2;
    },
    toString: function() {
        return 'secondObject'
    }
};

console.log('Sum objects', firstObject + secondObject);

console.log('Subtract objects', firstObject - secondObject);

console.log('Multiply objects', firstObject * secondObject);

console.log('Divide objects', firstObject / secondObject);

console.log('Modulus objects', firstObject % secondObject);

console.log('Greater than', firstObject > secondObject);

console.log('Less than boolean', firstObject < secondObject);

console.log('Greater than or equal', firstObject >= secondObject);

console.log('Less than  or equal', firstObject <= secondObject);