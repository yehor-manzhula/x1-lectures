'use strict';

//window.addEventListener('load', onWindowLoad);

function onWindowLoad() {

    let myObj = {

        bindEvents() {
            const self = this;
            const args = arguments;


            console.log('this in parent function = ', this);
            console.log('arguments on parent function = ', arguments);

            document.querySelector('a').addEventListener('click', (e) => {
                console.log('this in hanlder = ', this);

                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            });

            document.querySelector('a').addEventListener('click', function(e) {
                console.log('this in hanlder = ', this);
                console.log('argsuments in handler = ', arguments);

                this.showMessage();

                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            });
        },

        showMessage() {
            alert('Some message');
        }
    };

    myObj.bindEvents('SHIT');
}




