/**
 * All datatypes can be separated in two groups
 * Primitives and Objects
 *
 * primitives are:
 * strings, numbers, boolean, null, undefined
 *
 * objects:
 * Date, String, Arrays, RegExp, Boolean, Number, Function
 *
 * They differs on how they works in code:
 * Primitives - by value
 * Object - by link
 */

function changeMessage(message) {
    message += 'I change message';
}

var message = 'test string';

console.log('Message is = ', message);
message = changeMessage(message);
console.log('Message is = ', message);


function changeSize(figure, newSize) {
    figure.size = newSize;
}

var square = {
    size: 5,
    getArea: function() {
        return this.size * this.size;
    }
};

console.log('Square area is = ', square.getArea());
changeSize(square, 25);
console.log('square area is = ', square.getArea());

var str = new String('test string');

"test".toLowerCase();

var t = "TEST\" ";
var t = 'TEST\' ';