const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

function saveTodos() {
    const todos = Array.from(todosWrapper.querySelectorAll('.todo-item')).map(todoItem => {
        return {
            description: todoItem.querySelector('.todo-item__description').textContent,
            checked: todoItem.querySelector('input[type="checkbox"]').checked,
        };
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    while (todosWrapper.firstChild) {
        todosWrapper.removeChild(todosWrapper.firstChild);
    }

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        const todoItem = createTodoItem(todo.description, todo.checked);
        todosWrapper.appendChild(todoItem);
    });
}

function createTodoItem(description, checked = false) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    if (checked) {
        todoItem.classList.add('todo-item--checked');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.addEventListener('change', function () {
        todoItem.classList.toggle('todo-item--checked');
        saveTodos();
    });

    const descriptionSpan = document.createElement('span');
    descriptionSpan.classList.add('todo-item__description');
    descriptionSpan.textContent = description;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-item__delete');
    deleteButton.textContent = 'Видалити';
    deleteButton.addEventListener('click', function () {
        todoItem.remove();
        saveTodos();
    });

    todoItem.append(checkbox, descriptionSpan, deleteButton);
    return todoItem;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputValue = input.value.trim();
    if (inputValue === '') {
        alert('Введіть текст завдання!');
        return;
    }

    const todoItem = createTodoItem(inputValue);
    todosWrapper.appendChild(todoItem);

    input.value = '';
    saveTodos();
});

window.addEventListener('storage', function (event) {
    if (event.key === 'todos') {
        loadTodos();
    }
});

loadTodos();
