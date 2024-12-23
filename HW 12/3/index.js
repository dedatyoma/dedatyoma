const list = document.getElementById('list'); 
const add = document.getElementById('add'); 
const addbutt = document.getElementById('addbutt'); 

list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const taskItem = event.target.closest('li'); 
    list.removeChild(taskItem); 
  }
});

addbutt.addEventListener('click', () => {
  const taskInput = add.value.trim(); 
  if (taskInput !== '') {
    const item = document.createElement('li'); 
    item.innerHTML = `<p class="task">${taskInput}</p><button class="delete">Видалити</button>`;
    list.appendChild(item); 
    add.value = ''; 
  }
});

add.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addbutt.click(); 
  }
});
