/**
 * Array is a special type of a variable that can contain multiple values
 */

var colors = ['orange', 'yellow', 'green'];
/**
 * Equal to
 */
colors = new Array('orange', 'yellow', 'green');

console.log('Array is object = ', typeof colors);
console.log('Colors is Array = ', colors instanceof Array);
console.log('Colors is Array = ', Array.isArray(colors));

/**
 * Number of values
 */
console.log('Number of colors = ', colors.length);

/**
 * Access to read and modify existing value through value index
 * indexes start from zero
 */
console.log('First color is = ', colors[0]);

colors[0] = 'blue';

console.log('And now first color become = ', colors[0], 'length is = ', colors.length);

/**
 Add new values
 */
colors[3] = 'red';
/**
 * or
 */
colors[colors.length] = 'magenta';
/**
 * or just using methods
 */
colors.push('cyan'); // adds to the end
colors.unshift('black', 'gray'); // adds to start


console.log('And now colors become = ', colors, ' length = ', colors.length); //
