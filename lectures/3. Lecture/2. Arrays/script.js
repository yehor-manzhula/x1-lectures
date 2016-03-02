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
colors.push('cyan', 'pink'); // adds to the end
colors.unshift('black', 'gray'); // adds to start

/**
 * Pay attention
 * There is no associative arrays
 * this will add property to array object
 */
colors['test'] = 'Become property';
/**
 * Equal to
 */
colors.test = 'I\'ll become property';

console.log('And now first colors become = ', colors, 'length is = ', colors.length);
console.log('Colors = ', colors.test);

console.log('And now colors become = ', colors, ' length = ', colors.length);

var last  = colors.pop(); // Modify array
console.log('Last color is = ', last, 'and colors become = ', colors, 'length is =', colors.length);


var first = colors.shift(); // Modify array
console.log('Last color is = ', first, 'and colors become = ', colors, 'length is =', colors.length);

/**
 * Pay attention
 * elements that doesn't exists will be undefined
 */
colors[20] = 'white';
console.log('Colors become = ', colors, 'length is =', colors.length);


console.log('Index of black =', colors.indexOf('magenta'));
console.log('Index of non existing color =', colors.indexOf('navy'));

console.log('Join array to string = ', colors.join(';'));
