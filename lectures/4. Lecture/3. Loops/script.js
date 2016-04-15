/**
 * Loops can execute a block of code a number of times.
 *
 * Loops are handy, if you want to run the same code over and over again, each time with a different value.
 * JavaScript supports different kinds of loops:
 *
 * for - loops through a block of code a number of times
 * for/in - loops through the properties of an object
 * while - loops through a block of code while a specified condition is true
 * do/while - also loops through a block of code while a specified condition is true
 */

var colors = ['black', 'orange', 'pink', 'blue'];

/**
 * for (statement 1; statement 2; statement 3) {
 *      code block to be executed
 * }
 *
 * Statement 1 - is executed before the loop (the code block) starts.
 *
 * Statement 2 - defines the condition for running the loop (the code block).
 *
 * Pay attention!
 * If condition is false block will not be executed.
 * If condition always true it will cause infinite loop, and freeze browser (or other environment)
 *
 * Statement 3 - is executed each time after the loop (the code block) has been executed.
 *
 * Each repeat of a block called iteration,
 * if you moving over array its called iterate over array
 */
for (var i = 0, len = colors.length; i < len; i++) {
    console.log('Color name is = ', colors[i]);
}

/**
 * The same can be written this way
 */
var i = 0;
var len = colors.length;

for (; i < len;) {
    console.log('Color name is = ', colors[i]);
    i++
}

/**
 * This loop will not run
 */
for (; false;) {
    console.log('You will never see this message');
}

/**
 * Code below will cause infinite loop
 */
//for (;true;) {
//
//}

/**
 * For iterate array its better to use forEach method
 * @link
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
colors.forEach(function(color, index, arr) {
    console.log('current color = ', color, ' its index = ', index, 'in array = ', arr);
});


/**
 * The JavaScript for/in statement loops through the properties of an object:
 * for (variable to put property name in object to iterate) {
 *      code block to be executed
 * }
 */
var square = {
    height: 5,
    width: 5,
    area: 25
};

for(var property in square) {
    console.log('Square', property, 'is:', square[property]);
}


/**
 * while
 * The while loop loops through a block of code as long as a specified condition is true.
 *
 * while(condition) {
 *   code block to be executed
 * }
 *
 * Pay attention!
 * If condition is always true it will cause infinite loop
 */

colors = ['black', 'orange', 'pink', 'blue'];

i = 0;
len = colors.length;

while(i < len) {
    console.log('Current colors is = ', colors[i]);
    i++;
}

/**
 * Pay attention!
 * Code block will not be executed if condition is false
 */
while(false) {
    console.log('You will never see this message');
}

/**
 * The do/while loop is a variant of the while loop.
 * This loop will execute the code block once, before checking if the condition is true,
 * then it will repeat the loop as long as the condition is true.
 *
 * do {
 *   code block to be executed
 * } while(condition);
 *
 * Pay attention!
 * If condition is always true it will cause infinite loop
 */
i = 0;

do {
    console.log('Current colors is = ', colors[i]);
    i++
} while(i < colors.length);

/**
 * Pay attention, do while will execute code block at least one time
 * even if condition is false
 */
do {
    console.log('Will always see this message, at least one time - even if condition is false');
} while(false);