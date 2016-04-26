/**
 * A JavaScript function is a block of code designed to perform a particular task.
 * It is useful - can reuse code: Define the code once, and use it many times.
 *
 * function name(parameter1, parameter2, parameter3) {
 *   code to be executed
 * }
 */

/**
 * Function can be defined with function keyword
 *
 * Function names has the same restrictions as variable
 * It is possible to create a function without a name
 */
function showWelcomeText() {
    console.log('Hi this is welcome text!');
}

/**
 * Or using constructor function
 */
var sumFunction = new Function('', 'console.log(\'Hi this is welcome text!\');');

/**
 * Function params goes in parentheses, separated by comma
 *
 * Pay attention:
 * 1. There is no default params values at least in ES5
 * 2. Its impossible to override function by params
 */
function showText(firstName, lastName) {
    console.log('Hello', firstName, lastName, '!');
}

/**
 * To invoke the function parentheses operator is used
 * With all parameters separated by comma, its not necessary to provide the same
 * params you defined in function, you can even provide more or less or don't provide them at all.
 *
 * A JavaScript function is executed when "something" invokes it (calls it) with
 * parentheses operator ()
 *
 * There are few scenarios when function call be called
 *
 * When an event occurs (when a user clicks a button)
 * When it is invoked (called) from JavaScript code
 * Automatically (self invoked)
 */
showText('Egor', 'Manzhula', 'This text will not be used');

/**
 * If there is no parameters provided all the parameters will be undefined
 */
showText();


/**
 * arguments keyword is used inside the function to get all the parameters as array
 */
function multiply(a, b) {
    console.log('a = ', a, 'b = ', b);
    console.log('arguments =', arguments);
}

multiply(5, 10);
multiply(5, 10, 15, 20, 50);

/**
 * To return value from function return keyword is used
 */
function sum(a, b) {
    return a + b;
}

console.log('Sum result is = ', sum(5, 10));

/**
 * If there is no return keyword implicitly function will return undefined
 */
function divide(a, b) {
  return  a / b;
}

console.log('Divide result is = ', divide(10, 5));


/**
 * In javascript functions are objects
 * It means that as other objects they have their own properties and methods
 * It means that that you can use them as regular objects, for example use
 * them as parameter for other function on store as a variable value
 */
console.log('Type of sum function is = ', typeof sum);

console.log('Is sum function an object? = ', sum instanceof Object);

/**
 * And as other objects function has their own toString method
 */
console.log('Sum toString result =', sum.toString());

var sortAsc = function(a, b) {
    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
};

var sortDesc = function(a, b) {
    return -1 * sortAsc(a, b);
};

var myArray = [2, 3, 5, 10, 1, 4];
var sortedArray = myArray.sort(myArray[0] == 2 ? sortDesc : sortAsc);

console.log('Sorted array = ', sortedArray);

/**
 * Lets pay attention to functions that are stored as a variables
 */
//firstInVariable('test');
console.log('Variable function is ', typeof firstInVariable);

otherOne('test');

var firstInVariable = function named() {
    console.log('Function arguments = ', arguments);
    console.log('My body is ', named.toString());
};

firstInVariable('Yep he is right!');

function otherOne() {
    console.log('Other one ', arguments);
}

console.log('Variable function is ', typeof firstInVariable);

