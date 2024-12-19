const container = document.getElementById('container');

container.addEventListener('click', function(event) {

  if (event.target && event.target.tagName === 'BUTTON') {

  alert(`Ви клікнули на ${event.target.textContent}`);
  }
 });