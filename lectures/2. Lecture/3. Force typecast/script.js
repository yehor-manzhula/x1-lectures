/**
 * There are few varians to force javascript
 * to cast type
 */

/**
 * Cast anything to string
 */
var number = 1,
    nubmerTostring = '' + number;

var boolean = true,
    booleanTostring = '' + boolean;

/**
 * Cast string to boolean
 * in logical context empty string is false
 * not empty string is true
 */
var string = 'test',
    stringToBolean = !!string; // true

string = '';
stringToBolean = !!string; // false

/**
 * Cast number to boolean
 * in logical context only 0 is false
 * any other number, event negative number is true
 */
/**
 * False will be
 *
 * false
 * null
 * undefined
 * ''
 * 0
 * Number.NaN
 *
 * True All the rest will be true
 * '0'
 * 'false'
 */
var number = 5,
    numberToBoolean = !!number; // true

number = -100500;
numberToBoolean = !!number; // true

number = 0;
numberToBoolean = !!number; // false

/**
 *  Cast boolean to number
 *  in numerical context
 *  true = 1
 *  false = 0
 */
var boolean = false,
    number = 10;

var result = number + boolean; // 10 - the same as 10 + 0


boolean = true,
    number = 10;

result = number + boolean; // 11 - the same as 10 + 1

/**
 * String to number
 */
var string = '5',
    number = parseInt(string); // 5 as a number

string = '6.1';
number = parseFloat(string); // 6.1 as a number


string = 'test 5';
number = parseInt(string); // NaN javascript doesnt search numbers in strings

string = '5 testString';
number = parseFloat(string); // NaN javascript doesnt search numbers in strings /**
* There are few varians to force javascript
* to cast type
*/

/**
 * Cast anything to string
 */
var number = 1,
    nubmerTostring = '' + number;

var boolean = true,
    booleanTostring = '' + boolean;

/**
 * Cast string to boolean
 * in logical context empty string is false
 * not empty string is true
 */
var string = 'test',
    stringToBolean = !!string; // true

string = '';
stringToBolean = !!string; // false

/**
 * Cast number to boolean
 * in logical context only 0 is false
 * any other number, event negative number is true
 */
/**
 * False will be
 *
 * false
 * null
 * undefined
 * ''
 * 0
 * Number.NaN
 *
 * True All the rest will be true
 * '0'
 * 'false'
 */
var number = 5,
    numberToBoolean = !!number; // true

number = -100500;
numberToBoolean = !!number; // true

number = 0;
numberToBoolean = !!number; // false

/**
 *  Cast boolean to number
 *  in numerical context
 *  true = 1
 *  false = 0
 */
var boolean = false,
    number = 10;

var result = number + boolean; // 10 - the same as 10 + 0

boolean = true,
    number = 10;

result = number + boolean; // 11 - the same as 10 + 1

/**
 * String to number
 */
var string = '5',
    number = parseInt(string); // 5 as a number or new Number(string)

string = '6.1';
number = parseFloat(string); // 6.1 as a number or new Number(string)

string = 'test 5';
number = parseInt(string); // NaN javascript doesnt search numbers in strings or new Number(string)

string = '5 testString';
number = parseFloat(string); // 5