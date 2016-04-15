/**
 * Conditional statements are used to perform different actions based on different conditions.
 *
 * if - specify a block of code to be executed, if a specified condition is true
 * else - specify a block of code to be executed, if the same condition is false
 * else if - specify a new condition to test, if the first condition is false
 * switch to - specify many alternative blocks of code to be executed
 *
 * if
 *
 * if (condition) {
 *    block of code to be executed if the condition is true
 * }
 *
 */

var step = 15;

/**
 * Will execute code block only if condition is true
 */
if (step > 10) {
    step+= 100;
}

console.log('Step become = ', step);

/**
 * if - else
 *
 * if (condition) {
 *   block of code to be executed if the condition is true
 * } else {
 *   block of code to be executed if the condition is false
 * }
 *
 * Will execute code block only if condition is true
 */

step = 15;

if (step > 30) {
    step+= 55;

/**
 * Will execute code block only if condition is false
 */
} else {
    step+= 10;
}

console.log('Step become = ', step);

/**
 * if / else condition can be written using ternary operation
 *
 * Ternary operator consits of three parts
 *
 * condition ? statement if condition is true : statement if condition if false;
 * each of statements has implicit return it means that result of statement will be returned
 * and can be assigned to some variable or can take part in other expression
 */

step = 55;

step+= step > 30 ? 55 : 10;

console.log('Step become = ', step);

/**
 * if - else if - else
 *
 * if (condition1) {
 *   block of code to be executed if condition1 is true
 * } else if (condition2) {
 *   block of code to be executed if the condition1 is false and condition2 is true
 * } else {
 *   block of code to be executed if the condition1 is false and condition2 is false
 * }
 *
 * Will execute code block only if condition is true
 */
step = 10;

if (step > 30) {
    step+= 55;
/**
 * Will check condition and execute code block if its true
 * only if previous condition is false
 *
 * You can have many else if conditions if your code
 */
} else if (step < 20) {
    step+= 10;
/**
 * Will execute code block only if previous conditions is false
 */
} else {
    step = 100500;
}

console.log('Step become = ', step);


/**
 * switch
 *
 * The switch statement is used to perform different actions based on different conditions.
 *
 * The switch expression is evaluated once.
 * The value of the expression is compared with the values of each case.
 * If there is a match, the associated block of code is executed.
 */
var statusCode = 301;
var responseText = '';

switch (statusCode) {

    /**
     * Pay attention on break keyword
     *
     * When the JavaScript code interpreter reaches a break keyword,
     * it breaks out of the switch block.
     */
    case 100:
    case 101:
    case 102: {
        responseText += 'INFORMATION_STATUS_CODE';
        break;
    }

    /**
     * Pay attention
     * if there is no break keyword next code block
     * will executed without matching case
     */
    case 200:
    case 201: {
        responseText += 'CREATED ';
    }

    /**
     * Sometimes, in a switch block, you will want different cases to use the same code, or fall-through to a common default.
     * Note from the next example, that cases can share the same code block, and that the default case does not have to be the last case in a switch block:
     */
    case 202:
    case 203:
    case 204:
    case 205:
    case 206:
    case 207:
    case 226: {
        responseText += 'SUCCESS';
        break;
    }

    case 300:
    case 301:
    case 302:
    case 302: {
        responseText += 'MOVED_TEMPORARILY ';
    }

    case 303:
    case 304:
    case 305:
    case 306:
    case 307: {
        responseText += 'REDIRECTION';
        break;
    }

    /**
     * The default keyword is optional
     * It specifies the code to run if there is no case match:
     */
    default: {
        responseText = 'UNKNOWN_RESPONSE_CODE';
        break;
    }
}

console.log('Response text = ', responseText);