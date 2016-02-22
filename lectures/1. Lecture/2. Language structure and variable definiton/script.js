/**
  Here is multi line comment
 */

var a = 1 + 2; // Single line comment

/**
 * var   - keyword that define variable
 * =     - operator that assign value to variable
 * 1, 2  - numbers
 * +     - sum operator
 * 1 + 2 - expression
 * ;     - end of execution command
 */

var a$_1 = 1; // Variable name can contains letters, numbers, _ and $ symbols
var $a = 1;   // Variable name can start from $ symbol
var _a = 1;   // Variable name can start from _ symbol

//var var = 1; Varibable name can't be the same as any of keywords/reserved words

/**
 * List of reserved words:
 * abstract
 * arguments
 * boolean
 * break
 * byte case
 * catch
 * char
 * class*
 * const
 * continue
 * debugger
 * default
 * delete
 * do
 * double
 * else
 * enum*
 * eval
 * export*
 * extends*
 * false
 * final
 * finally
 * float
 * for
 * function
 * goto
 * if
 * implements
 * import*
 * in
 * instanceof
 * int
 * interface
 * let
 * long
 * native
 * new
 * null
 * package
 * private
 * protected
 * public
 * return
 * short
 * static
 * super*
 * switch
 * synchronized
 * this
 * throw
 * throws
 * transient
 * true
 * try
 * typeof
 * var
 * void
 * volatile
 * while
 * with
 * yield
 *
 */

/**
 * Code block
 */
{
    var blockCodeVar = 100;
}

/**
 * Dynamic typization
 */
var z = 100; // number
z = 'some str'; // become string
z = {   // become object
    x: 1,
    y: 5
};

/**
 * Its possible to use short syntax to define variable
 * using comma symbol
 * This variant is faster than separate definiton
 * because engine will execute code as one instruction
 */
var a = 1,
    b = 2,
    c = a + b;


/**
 * Javscript is casesensitive language
 * Code below define 4 different variables
 */
var a = 1,
    A = 1,
    test = 'test',
    Test = 'test';


/**
 * Specificaly I use lower camel case
 * style during coding
 */
var thisIsTestVariable = 'Hello';


/**
 * Javascript ignores spaces and new lines symbols
 *
 */
var a = 1;
var b=1;
var d =
    1;
var c =




    2;


document.write('<h1>And code still works</h1><br>');

/**
 * Variable definition can be separate instruction from assing value
 * In that case value of variable will be undefined
 */
var myVariable;
document.write('<br>myVariable value is = ' + myVariable);

myVariable = 10;
document.write('<br>New value of myVariable is = ' + myVariable);

/**
 * Variable can be redefined (bad practice)
 * In that case nothing will happend with its value
 * So variable will not lose its value
 */
var otherVariable = 100500;
document.write('<br><br>New value of otherVariable is = ' + otherVariable);

var otherVariable;
document.write('<br>Value of otherVariable still = ' + otherVariable  + '<br>');
