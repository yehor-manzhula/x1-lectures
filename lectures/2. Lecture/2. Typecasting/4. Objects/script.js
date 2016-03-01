console.log('\nOBJECTS');

/**
 * Objects
 */
var firstObject = {
    toString: function() {
        return '5';
    }
};

var secondObject = {
    toString: function() {
        return '10';
    }
};

console.log('Sum objects', firstObject + secondObject);
console.log('Sum objects', firstObject.toString() + secondObject.toString());


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
        return 'firstObject';
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


var myObj = {
    valueOf: function () {
        console.log('FIRST');
        return this; // Not implemented
    },

    toString: function () {
        console.log('SECOND');
        return 'THERE IS NOTHING TO DO HERE!';
    }
};

var myObj2 = {
    valueOf: function () {
        console.log('FIRST');

        return this;
    },

    toString: function () {
        console.log('SECOND');
        //return 'THERE IS NOTHING TO DO HERE!';

        return this;// [Object object]
    }
};

var a = 2; // Number literal
var s = 'str'; //
