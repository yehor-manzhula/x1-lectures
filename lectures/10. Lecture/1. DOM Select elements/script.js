/*
 What is dom?
 Baby, don't hurt me,
 don't hurt me, no more.
 */
window.document; // window.property

document; // global because of window property

var outterContainer = document.getElementById('outter-wrapper');
var innerContainer = document.getElementById('inner-wrapper');

console.log('Inner =', innerContainer, 'and its id', innerContainer.id);
console.log('Outter =', outterContainer, 'and its id', outterContainer.id);

var content = document.getElementsByClassName('content');

for(var i = 0; i < content.length; i++) {
    console.log('element tagName =', content[i].tagName);
}

var contentElement = document.querySelector('.content');
var contentElements = document.querySelectorAll('.content');

var contentText = document.querySelector('.text');
console.log('parent node = ', contentText.parentNode);
console.log('element child = ', contentText.childNodes);

var links = contentText.querySelectorAll('a');

for(var i = 0; i < links.length; i++) {
    console.log('child = ', links[i]);
}
//
// for(var i = 0; i < contentElements.length; i++) {
//
//     var currentElement = contentElements[i];
//
//     console.log('child list = ', currentElement.childNodes);
//
//     if (currentElement.tagName !== 'SPAN') {
//         continue;
//     }
//
//     currentElement.className += ' highlight';
//
//     console.log('currentElement', currentElement.className);
// }
//
// console.log('content element = ', contentElement);
// console.log('content elements = ', contentElements);
//
//
//
//
