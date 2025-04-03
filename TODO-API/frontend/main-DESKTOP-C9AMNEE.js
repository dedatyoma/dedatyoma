const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

const API_URL = "http://localhost:3000/todos";

async function loadTodos() {

    while (todosWrapper.firstChild) {
        todosWrapper.removeChild(todosWrapper.firstChild);
    }

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const todos = await response.json();

        todos.forEach(todo => {
            const todoItem = createTodoItem(todo.description, todo.checked, todo._id);
            todosWrapper.appendChild(todoItem);
        });
    } catch (error) {
        console.error("Помилка завантаження завдань:", error);
    }
}

function createTodoItem(description, checked = false, id = null) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    if (checked) {
        todoItem.classList.add('todo-item--checked');
    }
    
    if (id) {
        todoItem.dataset.id = id;
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.addEventListener('change', async function () {
        todoItem.classList.toggle('todo-item--checked');
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ checked: checkbox.checked }),
            });
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        } catch (error) {
            console.error("Помилка оновлення завдання:", error);
        }
    });

    const descriptionSpan = document.createElement('span');
    descriptionSpan.classList.add('todo-item__description');
    descriptionSpan.textContent = description;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-item__delete');
    deleteButton.textContent = 'Видалити';
    deleteButton.addEventListener('click', async function () {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            todosWrapper.removeChild(todoItem);
        } catch (error) {
            console.error("Помилка видалення завдання:", error);
        }
    });

    todoItem.append(checkbox, descriptionSpan, deleteButton);
    return todoItem;
}

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const inputValue = input.value.trim();
    if (!inputValue) {
        alert('Введіть текст завдання!');
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description: inputValue, checked: false }),
        });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const newTodo = await response.json();
        const todoItem = createTodoItem(newTodo.description, newTodo.checked, newTodo._id);
        todosWrapper.appendChild(todoItem);

        input.value = '';
    } catch (error) {
        console.error("Помилка додавання завдання:", error);
    }
});

loadTodos();
