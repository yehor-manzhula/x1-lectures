var test;

var num = 1;  // Number primitive
var numObj = new Number(1); // Object

num === numObj; // false

var flt = 1.5;// Number primitive
var fltObject = new Number(1.5); // Object

var str = 'My test string'; // String primitive
var strObject = new String('Some object string'); // String object

var bool = true;
var boolObject = new Boolean(true);

var obj = { // Object
    x: 10,
    y: 20,
    move: function(x, y) {
        this.x = x;
        this.y = y;
    }
};

var sum = function(a, b) {
    return a + b;
};

var nan = {} / 10;

// typeof - keyword that returns typeof variable
console.log('Empty variable type is: ', typeof test);

// typeof result is a string
console.log('Result is string =', typeof test === 'undefined', '\n\n');

console.log('Number type is: ', typeof num); // 1 = number
console.log('Number obj type is: ', typeof numObj, '\n\n'); // Object

console.log('Number with point type is: ', typeof flt); // number
console.log('Number obj with point type is: ', typeof flt, '\n\n'); // Object

console.log('String type is: ', typeof str);
console.log('String object type is: ', typeof strObject, '\n\n');

console.log('Boolean type is: ', typeof bool);
console.log('Boolean obj type is: ', typeof boolObj, '\n\n');

console.log('Obj type is: ', typeof obj, '\n\n'); // Object
console.log('Obj function type is: ', typeof obj.move); // Function
console.log('Function type is: ', typeof sum, '\n\n'); // Function

// OOPS! WTF? NAN IS NUMBER!
console.log('NaN type is:', typeof nan);

// Lets us find workaround about it
console.log('Is NaN:', nan === NaN);
console.log('Is NaN:', isNaN(nan));

