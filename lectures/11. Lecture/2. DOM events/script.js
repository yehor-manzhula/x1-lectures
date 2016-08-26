function showAlert(element) {
    alert('Hi all!');
    console.log('this is = ', element);
}

function onDocumentLoad() {
    var element = document.querySelector('#inner-wrapper');
    var link = document.createElement('a');

    link.innerHTML = 'Some text';
    element.appendChild(link);

    console.log('handler 1');
}

function onDocuemntLoad2() {
    console.log('handler 2');
}

window.onload = onDocumentLoad;

var copy = onDocumentLoad.bind(window);

window.addEventListener('load', onDocumentLoad);
window.addEventListener('load', copy);
window.addEventListener('click', onDocuemntLoad2);

window.removeEventListener('load', onDocumentLoad);
window.removeEventListener('load', copy);
window.removeEventListener('click', onDocuemntLoad2);

//
// window.onload = function() {
//     document.write('<h1>What will it do?</h1>');
//
//     console.log('handler 2');
// };