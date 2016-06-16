'use strict';

/**
 * Context
 **/
// var square = {
//     height: 5,
//     getArea: function() {
//         console.log('this is = ', this);
//
//         // this {height: 5, getArea: function() {...} }
//         return this.height * this.height;
//     }
// };

// This
// function getArea(logMessage) {
//     console.log('Arguments is = ', arguments); // ['My log message']
//     console.log('Log message is = ', logMessage); // undefined
//
//     // this = undefined
//     console.log('THIS IN GLOBAL FUNCTION IS = ', this); // Square
//     return this.height * this.height; // 25
// }
//
// var square = {
//     height: 5
// };
//
// console.log(window.getArea);
// console.log('GET AREA WITH GIVEN CONTEXT', getArea.apply(square, ['My log message']));
// console.log('GET AREA WITH GIVEN CONTEXT', getArea.call(square, 'My other Log message'));
// console.log('TRY TO GET AREA CONTEXT', square.getArea()); // Need square to have getAre function

// var cat = {
//     sound: 'Meow!',
//
//     say: function(afterWord, beforeWord) {
//         // arguments
//         return afterWord + this.sound + beforeWord;
//     }
// };
//
// var dog = {
//     sound: 'Woof!'
//     //
//     // say: function() {
//     //     return this.sound; // cat
//     // }
// };
//
// console.log('Cat say is = ', cat.say('Simon, ')); // Simon, Meow!
// console.log('Dog say is = ', cat.say.apply(dog, ['Hey dude!', ' Thats my cat!'])); // undefined Woof!
// console.log('Dog say is = ', cat.say.call(dog, 'Hey dude!', ' Thats my boy!')); // undefined Woof!




//console.log('Cat say is = ', cat.say.apply(dog)); // Woof
//console.log('Dog say is = ', dog.say()); // Woof




//console.log('GET AREA CONTEXT', window.getArea(), getArea());
//console.log('GET AREA CONTEXT', getArea(), window.getArea());
// Is qual to
// window.getArea = function getArea() {
//     console.log('this is = ', this);
//     console.log('window.height', window.height);
//
//     // this = window
//     return this.height * this.height;
// };
//
// console.log('Square height = ', square.height);
//
// console.log('Square area is = ', square.getArea()); // this -> square
//
// var triangle = {
//     message: 'Some message',
//
//     help: function() {
//         //console.log(triangle.message);
//         console.log(this.message); // triangle
//     }
// };
//
// triangle.help();
//
//
// console.log('Area is = ', getArea()); // this will be window
// // If strict mode enabled calls are equal
// console.log('Area is = ', window.getArea()); // this also will be window
//
//
// // If strict mode isn't enabled calls are not equal
// console.log('Area is = ', getArea()); // this will be undefined
// // If strict mode enabled calls are equal
// console.log('Area is = ', window.getArea()); // this also will be window



function sum(even) {
    // this
    //arguments  [1, 2, 3, 5, 10]
    var numbers = Array.isArray(even) ? even : Array.prototype.slice.call(arguments); // Change context

    var result = 0;

    numbers.forEach(function(value) {
        result += value;
    });

    return result;
}

var even = [];
for(var i = 2; i < 100; i+=2) {
    even.push(i);
}

console.log('numbers is = ', even);
console.log('Sum is = ', sum(1, 2, 3, 5, 10)); // 21
console.log('Sum is = ', sum.apply(null, even)); // 2450
console.log('Sum is = ', sum.call(null, even)); // 2450


