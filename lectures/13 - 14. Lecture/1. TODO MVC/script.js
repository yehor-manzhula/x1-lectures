'use strict';
window.addEventListener('load', onWindowLoad);

function onWindowLoad() {
    var TodoMVC = {
        todoList: [],

        addTodo: function(todoText) {
            // this = TodoMVC
            this.todoList.push(todoText);

            // Called implicitly
            // TodoMVC.render();
            this.render();
        },

        removeTodo: function(index) {
            var indexToRemove = this.todoList.indexOf(todoText);

            if (indexToRemove > -1) {
                this.todoList.splice(indexToRemove, 1);
                this.render();
            }
        },

        render: function() {
            // this === TodoMVC
            var todoListContainer = document.querySelector('#todo-list');
            // Clear the list
            todoListContainer.innerHTML = '';

            this.todoList.forEach(function(todo, index, todoList) {
                // this
                console.log('this in for each loop = ', this);

                // <li>First one</li>
                var todoElement = document.createElement('li');
                todoElement.innerHTML = todo;

                // <span>x</span>
                var closeSpan = document.createElement('span');
                closeSpan.innerHTML = '×';

                closeSpan.addEventListener('click', (function() {
                    closeSpan.parentNode.remove();

                    this.removeTodo(todo);
                    this.render();
                }).bind(this));

                // <li>First one<span>x</span></li>
                todoElement.appendChild(closeSpan);

                // <ul><li>First one<span>x</span></li></ul>
                todoListContainer.appendChild(todoElement);
            }, this);
        }
    };

    // Make TodoMVC global
    window.TodoMVC = TodoMVC;

    document.querySelector('#todo-text').addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            TodoMVC.addTodo(this.value);
            this.value = '';
        }
    });
}
