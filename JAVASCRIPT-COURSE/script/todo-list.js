const todoList = JSON.parse(localStorage.getItem('todo list')) ||
    [];
renderTodo();

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

function renderTodo() {
    let html = '';

    todoList.forEach((todoListObject, index) => {
        const { name, dueDate } = todoListObject;

        const todo = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <input type="checkbox">
        <button class="delete-button js-delete-button">Delete</button>
        `;
        html += todo;
    });

    document.querySelector('.js-todo-list')
        .innerHTML = html;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            localStorage.setItem('todo list', JSON.stringify(todoList));
            renderTodo();
            });
        })
}

function addTodo() {
    const inputElement = document.querySelector('.js-todo-input');
    const inputDateElement = document.querySelector('.js-due-date');

    const name = inputElement.value;
    const dueDate = inputDateElement.value;


    todoList.push({
        name: name,
        dueDate: dueDate,
    });

    localStorage.setItem('todo list', JSON.stringify(todoList));

    renderTodo();

    inputElement.value = '';
}