// Comparsion

var x = 100;
var y = 500;

// Less than	x < y

console.log('X less than Y', x < y);

// Less than or equal
console.log('X less than or equal Y', x <= y);

// Greater than
console.log('X greater than Y', x > y);

// Greater than or equal
console.log('X greater than or equal Y', x >= y);

var s = '100';
var n = 100;

// Equality
console.log('X equal Y', s == n);

// Equality strict
console.log('X Strict equal', s === n);

// Not equal
console.log('X equal Y', s != n);

// Not equal strict
console.log('X Strict equal', s !== n);

// Logical opperations

// &  - and
// || - or
//  ! - not
// () - group conditions

var t = 100;
var z = 50;

console.log('Z less than t and both greater than zero', z < t && (z > 0 && t > 0));

console.log('Z less than t and one of numbers greater than zero', z < t && (z > 0 || t > 0));

console.log('Z less than t and both not zero', z < t && (z !== 0 && t !== 0));

