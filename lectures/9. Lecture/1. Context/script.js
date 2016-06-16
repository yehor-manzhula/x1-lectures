'use strict';

var dog = {
    age: 10,
    message: 'Woof!',
    say: function () {
        console.log('THIS IS = ', this); // undefined
        console.log(this.message); // undefined.message

        // if no keyword return
        // undefined
    }
};

var cat = {
    age: 5,
    message: 'Meow!'
};

//cat.say = dog.say;
//cat.say(); // this = cat

var say = (function(context) {
    // {context: {
    // message: 'MAGIC'
    //}}

    return function() {
        // this ?
        // Scope = {}
        dog.say.apply(context);
    }

})({
    message: 'MAGIC'
});

say.apply({message: 'ALLAH'});


//
// var wizard = {
//     message: 'MAGIC'
// };
//
var say = dog.say.bind(wizard).bind(cat).bind(dog).bind({});
say = say.bind(dog); // this = dog

say = dog.say.bind(dog);

//say // this = wizard
//
// say = say.bind(dog); // this = dog
// say(); // MAGIC or DOG
//
// console.log(say);
// console.log(say());
// console.log(say());
// console.log(say());
// console.log(say());

//console.log('IT IS HERE ');
//say(); // this undefined


// dog.say();
//
// dog.say.apply(cat);
// // or
// dog.say.call(cat);

//
// cat.name = 'Felix'; // Adds name
// //console.log(cat.name);
//
// cat.age = dog.age; // Cat now is 10 years old
// cat.age = 100;
//
// //console.log('DOG SAID = ', dog.say()); // Woof!
// // DOG SAID = undefined
//
// var say = dog.say; // Context will not be saved
//
// console.log(window.say);
//
// dog.say(); // this = dog
//
// // // Strict mode disabled
// // dog.say.apply({
// //     message: 'I am fish.'
// // });
// //
// // dog.say.call({
// //     message: 'There is nothing to say.'
// // });
//
// //say // this = {
// // }
//
//
// //cat.say(); // this = cat
//
// // Strict mode enabled
// //say(); // this = undefined
//
//
//
// /*var say = function () {
//     console.log(this.message);
//
//     // if no keyword return
//     // undefined
// };*/
//
//
// //cat.say = dog.say; //
//
// //
// //
// //
// //
// // cat.say();