const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

// Обработчик отправки формы
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
});