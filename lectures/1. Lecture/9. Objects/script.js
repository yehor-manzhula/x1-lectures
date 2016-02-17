var emptyObject = {};
emptyObject = new Object();

// Object literal
var square = {
    // Property
    size: 5, // New lines and spaces are not necessary

    // If property value is function
    // it called method
    getArea: function() {
        return this.size * this.size;
    }
};

console.log('Size = ', square.size);
console.log('Area = ', square.getArea());

square.size = 10;
console.log('Size = ', square.size);
console.log('Area = ', square.getArea());

square.test = 100500;
console.log('Square size = ', square.test);

// Tell about context