/**
 * break
 * The break statement exits of a loop.
 * It means that next iteration will not be executed and loop ended
 * It can be used in any loop operator javascript provide
 */

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log('For loop', 'current step is = ', i);
}

var i = 0;
while (i < 10) {
    if (i === 5) {
        break;
    }

    console.log('While loop', 'current step is = ', i);

    i++;
}

var i = 0;
do {
    if (i === 5) {
        break;
    }

    console.log('Do while loop', 'current step is = ', i);

    i++;
} while (i < 10);

var testObject = {
    somePropOne: '1',
    somePropTwo: '2',
    somePropThree: '3',
    somePropFour : '4',
    somePropFive : '5'
};

for (var prop in testObject) {
    if (prop === 'somePropThree') {
        break;
    }

    console.log('Object prop value = ', testObject[prop]);
}

/**
 * The continue statement skips one iteration in the loop.
 * It means that loop will not be ended and next iteration will be executed
 */
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log('For loop', 'current step is = ', i);
}

/**
 * Pay attention
 *
 * In while and do\while loops continue just end current iteration
 * but doesn't execute any statement so you should prevent infinite loop
 */
var i = 0;
while (i < 10) {
    if (i === 5) {
        i++;
        continue;
    }

    console.log('While loop', 'current step is = ', i);

    i++;
}

var i = 0;
do {
    if (i === 5) {
        i++;
        continue;
    }

    console.log('Do while loop', 'current step is = ', i);

    i++;
} while (i < 10);

var testObject = {
    somePropOne: '1',
    somePropTwo: '2',
    somePropThree: '3',
    somePropFour : '4',
    somePropFive : '5'
};

for (var prop in testObject) {
    if (prop === 'somePropThree') {
        continue;
    }

    console.log('Object prop value = ', testObject[prop]);
}


/**
 * And of course these keywords are independent and can be used together in one loop
 */
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }

    if (i === 7) {
        break;
    }

    console.log('For loop', 'current step is = ', i);
}

var i = 0;
while (i < 10) {
    if (i === 5) {
        i++;
        continue;
    }

    if (i === 7) {
        break;
    }

    console.log('While loop', 'current step is = ', i);

    i++;
}


var i = 0;
do {
    if (i === 5) {
        i++;
        continue;
    }

    if (i === 7) {
        break;
    }

    console.log('Do while loop', 'current step is = ', i);

    i++;
} while (i < 10);

var testObject = {
    somePropOne: '1',
    somePropTwo: '2',
    somePropThree: '3',
    somePropFour : '4',
    somePropFive : '5'
};

for (var prop in testObject) {
    if (prop === 'somePropThree') {
        continue;
    }

    if (prop === 'somePropFour') {
        break;
    }

    console.log('Object prop value = ', testObject[prop]);
}
