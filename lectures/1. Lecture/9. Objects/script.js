var emptyObject = {}; // Object literal

emptyObject = new Object();

// Object literal
var square = {
    // Property
    size: 5, // New lines and spaces are not necessary

    // If property value is function
    // it called method
    getArea: function() {
        return this.size * this.size;
    },

    'size-test': 100500
};

console.log('Size = ', square.size);
console.log('Area = ', square.getArea());

square.size = 10;
console.log('Size = ', square.size);
console.log('Area = ', square.getArea());

square.test = undefined;

console.log(square);
console.log('Square size = ', square.hasOwnProperty('test'));

delete square.test;
console.log('Square size = ', square.hasOwnProperty('test'));

console.log(square);


// Tell about context