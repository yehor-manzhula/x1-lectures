/**
 * Inpterpreteter works in two steps
 * 1. Search and define all variables and functions
 * 2. Execute code
 *
 * Because of it its possible to use variable
 * before its definiton, it will not produce errors
 */

console.log('Variable test value currently is = ', test);

var test;
test = 'NEW TEST VARIABLE VALUE';

console.log('Variable test value currently is = ', test);