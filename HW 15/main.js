const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

function saveTodos() {
    const todos = Array.from(todosWrapper.children).map(todoItem => {
        return {
            description: todoItem.querySelector('.todo-item__description').textContent,
            checked: todoItem.querySelector('input[type="checkbox"]').checked,
        };
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}
function loadTodos() {
    todosWrapper.innerHTML = ''; 

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        if (todo.checked) {
            todoItem.classList.add('todo-item--checked');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.checked;
        checkbox.addEventListener('change', function () {
            todoItem.classList.toggle('todo-item--checked');
            saveTodos();
        });

        const description = document.createElement('span');
        description.classList.add('todo-item__description');
        description.textContent = todo.description;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('todo-item__delete');
        deleteButton.textContent = 'Видалити';
        deleteButton.addEventListener('click', function () {
            todoItem.remove();
            saveTodos();
        });

        todoItem.append(checkbox, description, deleteButton);
        todosWrapper.appendChild(todoItem);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = input.value.trim();

    if (inputValue === '') {
        alert('Введите текст задачи!');
        return;
    }

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        todoItem.classList.toggle('todo-item--checked');
    });

    const description = document.createElement('span');
    description.classList.add('todo-item__description');
    description.textContent = inputValue;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-item__delete');
    deleteButton.textContent = 'Видалити';
    deleteButton.addEventListener('click', function() {
        todoItem.remove('todo-item');
    });

    todoItem.append(checkbox, description, deleteButton);
    todosWrapper.appendChild(todoItem);

    input.value = '';
    saveTodos();
});
loadTodos();