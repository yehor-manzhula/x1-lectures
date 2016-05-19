/**
 * Scope is the set of variables you have access to.
 *
 * JavaScript has function scope: The scope changes inside functions
 * in other words each function creates each own scope.
 *
 * In browser environment Window is hosted object provided by environment - is global scope
 *
 * In nodejs there is another hosted object - global and it will take global scope role there
 */

/**
 * var operator define variable in current scope
 */
var someVariable = 'Some test variable';

/**
 * Pay attention!
 *
 * If you are trying to set value to variable you didn't define before
 * javascript engine will try to find it in current scope,
 * if it will not find it there it will go to parent scope until it will fine one,
 * otherwise it will create global variable.
 * So it is the reason why you should not define variables without var.
 */
test = 'Some variable without var';

console.log('Some variable = ', someVariable);
console.log('Some variable = ', window.someVariable);

console.log('Test variable = ', test);
console.log('Test variable = ', window.test);

function createToDo() {
    console.log('TEST');
}

console.log('Function also is variable =', createToDo);
console.log('Function also is variable =', window.createToDo);

/**
 * Functions create its own scope
 * it means that variables defined inside function
 * will be visible only inside it and all child scopes
 */
function calculateDiscount(amount) {
    var discountRate = 0.2;

    console.log('Try to remove local variable = ', discountRate);

    function printMessage(amount) {
        /**
         * You can override parent scope variable
         * in that case all child scopes and current scope will have its own variable
         */
        //var discountRate = 0.4;

        console.log('Discount is:'
            + (discountRate * 100) + '%'
            + ' from: ' + amount);

        /**
         * Let us check all parent scopes variables
         */
        // Parent scope variable
        console.log('Discount rate = ', discountRate);

        // Global variables
        console.log('Some variable = ', someVariable);
        console.log('Some variable = ', window.someVariable);

        console.log('Test variable = ', test);
        console.log('Test variable = ', window.test);

        console.log('Function also is variable =', createToDo);
        console.log('Function also is variable =', window.createToDo);

        /**
         * Let us create variable without var
         */
        d = 10;

        console.log('D become global? ', d === window.d);
    }

    printMessage(amount);

    return (amount - (amount * discountRate));
}

calculateDiscount(200);

/**
 * Variables defined inside the function unavailable outside
 */
console.log('Discount rate = ', typeof discountRate);
console.log('Print message = ', typeof printMessage);

// Window
var square = {};

/**
 * In current scope equal to
 */
//window.square = {};
console.log('square object is the same =', square === window.square);

console.log('square =', square);

square.area = 100;
square['area'] = 100;

Object.defineProperty(square, 'area', {
    //writable: false,
    //configurable: false
});

console.log('Square object =', square);

delete square.area; // true

console.log('Square object after delete area =', square);

delete window.square;
console.log('Square in window =', window.square);