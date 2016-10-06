'use strict';

// All including jQuery loaded
$(document).ready(function () {
});

// Shorthand
$(function () {

    var TodoMVC = {
        todoList: [],

        addTodo: function (todoText) {

            var todo = {
                text: todoText,
                done: false
            };

            // this = TodoMVC
            this.todoList.push(todo);

            // Called implicitly
            // TodoMVC.render();
            this.render();
        },

        removeTodo: function (index) {
            this.todoList.splice(index, 1);
        },

        clearCompleted: function () {
            console.log('Should clear all completed items');

            // TODO: Optimize multiple render call
            this.todoList.forEach(function (todo, index, array) {
                if (todo.done) {
                    this.removeTodo(index);
                }
            }, this);

            this.render();
        },

        render: function () {
            // this === TodoMVC
            var todoListContainer = $('#todo-list');

            // Clear the list
            todoListContainer.innerHTML = '';

            //[{
            //      text: 'Test 1',
            //      done: false
            // }, {
            //      text: 'Test 2',
            //      done: false
            // }, {
            //      text: 'Test 3',
            //      done: false
            // }]

            this.todoList.forEach(function (todo, index, todoList) {
                // todo = {
                //  text: 'Test 1',
                //  done: false
                // }

                // <li>First one</li>
                var todoElement = $('<li>' + todo.text + '</li>');

                if (todo.done) {
                    todoElement.className += ' done';
                }

                var todoDoneElement = $('<input type="checkbox">');
                todoDoneElement.prop('checked', todo.done); // true/false

                todoDoneElement.on('change', (function () {
                    todo.done = todoDoneElement.checked;
                    this.render();
                }).bind(this));

                // <span>x</span>
                var closeSpan = $('<span>×</span>');

                closeSpan.on('click', (function () {
                    closeSpan.parent().remove();

                    this.removeTodo(index);
                    this.render();
                }).bind(this));

                // <li>First one<span>x</span></li>
                todoElement.append(todoDoneElement);

                // <li>First one<span>x</span></li>
                todoElement.append(closeSpan);

                // <ul><li>First one<span>x</span></li></ul>
                todoListContainer.append(todoElement);
            }, this);

            var activeItemsLeft = $('#active-items-left');
            activeItemsLeft.innerHTML = this.todoList.filter(function (todo) {
                return !todo.done;
            }).length;
        }
    };

    // Make TodoMVC global
    window.TodoMVC = TodoMVC;

    // Input
    $('#todo-text').on('keyup', function (event) {
        if (event.keyCode === 13) {
            TodoMVC.addTodo(this.value);
            this.value = '';
        }
    });

    // Clear all completed button
    $('#clear-completed').on('click', function () {
        TodoMVC.clearCompleted();
    });

});
