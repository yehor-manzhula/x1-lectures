//var colors = ['red', 'green', 'yellow'];
//
//function showFirstColor(colors) {
//    console.log('First color is = ', colors.shift());
//}
//
//showFirstColor(colors); // ['green', 'yellow'];
//console.log('colors is = ', colors);
//showFirstColor(colors); // ['yellow'];
//console.log('colors is = ', colors);
//showFirstColor(colors); // [];
//console.log('colors is = ', colors);

var someVaraible = 'Some test variable';
test = 'Some variable without var';

function sum(a, b) {
    var someVaraible = 'My another variable';
    var sumVar = 'MyVar';
    var result = a + b + someVaraible;



    function multiply(a, b) {
        test = 'Some variable without var';

        var MultiplyVar = 'MyVar' + sumVar;
        var result = a * b + MultiplyVar + '' + someVaraible;

        delete result;


        return result;
    }

    //{a:'', b:'', MultiplyVar: '', result: ''}


    console.log(multiply(100, 500));

    return result;
}



console.log(sum(100, 500));
//console.log('result = ', result);

//console.log(multiply(100, 500));
//console.log('result = ', result);

// Window
var square = {};
//window.square = {};

//console.log('square =', square);

square.area = 100;
square['area'] = 100;


Object.defineProperty(square, 'area', {

});
//console.log('square =', square);
//
//delete square.area;

//console.log('square =', square);
//console.log('square =', square === window.square);
//console.log('square in window =', delete square);