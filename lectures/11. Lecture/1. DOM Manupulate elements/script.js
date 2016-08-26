var element = window.document.createElement('div');
console.log('element = ', element);

var link = document.createElement('a');
console.log('link = ', link);

link.href = 'http://google.com';
link.innerHTML = 'Link to google'; // <a> INNNER HTML  </a>

//var outerWrapper = document.querySelector('#outter-wrapper');
//document.body.insertBefore(link, outerWrapper);

var innerWrapper = document.querySelector('#inner-wrapper');
var otherLink = link.cloneNode(true);

innerWrapper.appendChild(link);
document.body.appendChild(link);
document.body.removeChild(link);
