console.log('SUM IS = ', sum);
console.log('Multiply iS = ', multiply);

function sum(a, b) { // Create its own scope
    return a + b;
}

var multiply = function(x, y) { // Function literal
    return x * y;
};

function show(message) {
    alert(message); // Implicit returns undefined
}

console.log('Sum = ', sum(5, 1));
console.log('Multiply = ', multiply(10, 2));
console.log('Show  = ', show('Hello team!'));