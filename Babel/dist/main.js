$(document).ready(function () {
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    $('#todo-list').empty();
    tasks.forEach(function (task) {
      const taskItem = $('<li>').attr('data-id', task.id).append($('<span>').addClass('task-text').text(task.text)).append($('<button>').addClass('complete-task btn btn-success btn-sm').text(task.completed ? '✔' : '✖')).append($('<button>').addClass('delete-task btn btn-danger btn-sm').text('✖'));
      $('#todo-list').append(taskItem);
    });
  }
  function saveTasks() {
    const tasks = [];
    $('#todo-list li').each(function () {
      const taskText = $(this).find('.task-text').text();
      const taskId = $(this).data('id');
      const taskCompleted = $(this).hasClass('completed');
      tasks.push({
        id: taskId,
        text: taskText,
        completed: taskCompleted
      });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  $('#add-task').click(function () {
    const taskText = $('#new-task').val().trim();
    if (taskText !== '') {
      const taskId = new Date().getTime();
      const taskItem = $('<li>').attr('data-id', taskId).append($('<span>').addClass('task-text').text(taskText)).append($('<button>').addClass('complete-task btn btn-success btn-sm').text('✖')).append($('<button>').addClass('delete-task btn btn-danger btn-sm').text('✖'));
      $('#todo-list').append(taskItem);
      $('#new-task').val('');
      saveTasks();
    }
  });
  $('#todo-list').on('click', '.complete-task', function () {
    $(this).parent('li').toggleClass('completed');
    saveTasks();
  });
  $('#todo-list').on('click', '.delete-task', function () {
    $(this).parent('li').remove();
    saveTasks();
  });
  $('#todo-list').on('click', '.task-text', function () {
    const taskContent = $(this).text();
    $('#taskText').text(taskContent);
    $('#taskModal').modal('show');
  });
  loadTasks();
});