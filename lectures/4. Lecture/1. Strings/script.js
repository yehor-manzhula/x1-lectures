/**
 * Strings - variable type that is used to manipulate text
 *
 * Full documentation available here
 * @link
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
 */

/**
 * Can be defined as string literals
 * symbol \ - is escape character
 *
 * \' -	single quote
 * \" -	double quote
 * \\ -	backslash
 * \n -	new line
 * \r -	carriage return
 * \t -	tab
 * \b -	backspace
 * \f -	form feed
 */
var text = 'Some text literal, pretty obvious isn\'t it?';
var otherText = "Text isn't long 10\\8";

/**
 * Backslash is also used to make multi line text
 * but it is was not supported in all browsers
 */
var multilineText = "This is first line\
        this is second line";

/**
 * So it is better to use just string concatenation
 *
 * Why slower?
 * Strings are immutable: Strings cannot be changed, only replaced.
 * It means that + operator creates new string with a result each time,
 * that affects memory and CPU
 *
 * better but slower
 */
var otherMultilineText = "This is first line" +
        "this is second line";

/**
 * Or using constructor function
 */
var instanceText = new String('Some text created with constuctor function');

/**
 * String length stored in length property
 */
console.log('Text length = ', text.length);
console.log('Other text length = ', otherText.length);
console.log('Instance text length = ', instanceText.length);

/**
 * Pay attention special characters and spaces also will be counted in length prop
 */
console.log('Multi line text length = ', multilineText.length); // 37
console.log('Other multi line text length = ', otherMultilineText.length); // 45 - BUT WHY?!


/**
 * Pay attention
 */
text.length = 1;
console.log('Length property is readonly = ', text.length, text);

/**
 * Strings comparison already pretty obvious for you
 */
console.log('String instance is equal to literal ? ', new String('test') == "test");
console.log('And now ? ', new String('test') === "test");

/**
 * Except one case
 */
console.log('String instance is equal to other string instance ? ', new String('test') == new String('test'));
console.log('And now ? ',  new String('test') == new String('test'));


var someText = 'I am text and I am proud of it';
/**
 * Lets have a look at some methods
 *
 * There is a method called charAt to get symbol at a position
 */
console.log('Let us get character at index 0 = ', someText.charAt(0));
console.log('Let us get last character = ', someText.charAt(someText.length - 1));


/**
 * Strings can be used as array of symbols
 * It means that you can get symbol at some index using [square brackets] operator
 *
 * But sometimes you can read that it is unsafe!
 * It does not work in all browsers (not in IE5, IE6, IE7)
 * It makes strings look like arrays (but they are not)
 * str[0] = "H" does not give an error (but does not work in IE5, IE6, IE7)
 *
 * But specifically I don't think so.
 */
console.log('Let us get character at index 0 = ', someText[0]);
console.log('Let us get last character = ', someText[someText.length - 1]);

/**
 * To get character index you can use indexOf
 * it will return first mat index of given character
 */

console.log('Let us search for t', 'text to search'.indexOf('t')); // 0
console.log('Let us search for t from second position', 'text to search'.indexOf('t', 1)); // 4

/**
 * So usually recommend to cast string to array if you want it to be
 *
 * To do so you can use .split('') with zero length string
 */
console.log('Let us convert some string to array = ', 'I want to become an array'.split(''));

/**
 * Split method usually is used to split string by some separator character
 */
console.log('For example by comma ', 'There should be at least one comma, otherwise example will not work'.split('.'));
console.log('Or by space', 'There should be at least one comma, otherwise example will not work'.split(' '));

/**
 * By the way is should be also obvious why instance methods work in literals
 *
 * Of course because of wrapping primitives!
 */

'Test sentence'.split(' ');
/**
 * So under the hood for code above javascript engine will do
 */
(new String('Test sentence')).split(' ');


/**
 * There are also a lot of useful methods
 */
var uppercasedString = 'I WANNA BE SMALL';
var lowercasedString = 'i wanna be huge';

console.log(uppercasedString.toLowerCase());
console.log(lowercasedString.toUpperCase());

/**
 * Pay attention any string method dons't change source string
 * because of string immutability
 * so all the methods return a new string
 */
console.log('Uppercased still = ', uppercasedString);
console.log('Lowercased still = ', lowercasedString);

/**
 * Plus operator can be also replaced with .concat(args...) method
 *
 * There is no such speed difference, but .concat is useful to concat some with dynamically created variable
 */

var result = 'This ';
result += 'is';
result += ' sparta';

console.log('Something like this = ', 'Dude, '.concat(result));