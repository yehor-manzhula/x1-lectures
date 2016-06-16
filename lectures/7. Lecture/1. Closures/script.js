/**
 * Closure
 */
function storeA(a) {
    // {a: 3}
    return function() {
        return a;
    };
}

var IknowA = storeA(10);
var IknowA2 = storeA(2);

//console.log('A = ', IknowA());
//console.log('A2 = ', IknowA2());

//
// for(var i = 0, len = colors.length; i < len; i++) {
//     var t = 10;
//     console.log('color is = ', colors[i] + 10);
// }

//console.log('now t is = ', t);

// var colors = ['pink', 'black', 'green'];
// result = [];
// colors.forEach(function(color) {
//     var postfix = ' is awesome!';
//
//     var c = function(postfix) {
//         // {postfix: undefined}
//         console.log(color + ' ' + postfix);
//     };
//
//     result.push(c);
// });
//
// result.forEach(function(func) {
//     func(' is shit!');
// });

var result = [];

var i = 0;

for(; i < 20; i++) {
    result.push((function(i) {
        // {i: }
        return function() {
            return i;
        }
    })(i));

    result.push(function() {
        return i;
    });
}
console.log(' I become = ', i);

console.log(result[0]());  // 0
console.log(result[19]()); // 20

console.log('FUNCTIONS ARE THE SAME? ', result[0] === result[19]);




// a = 20;
// var c = function(b) {
//     // {b: 3}
//     return a + b;
// };

//console.log('Result = ', c(10));
// console.log('Result is = ', sum(3)(7)(5));
// console.log('Result is = ', sum(8)(10)(2));
//
//
// console.log(sum(5)(3));
// console.log(sum(10)(50));


//console.log('C is ', typeof c, c.toString());
//(3);
//c = null;
