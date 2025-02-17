const button = document.getElementById('changeColor');
const text = document.getElementById('textColor');

let colorChanged = false;

button.addEventListener('click', () => {
  if (colorChanged) {
    text.style.color = 'black'; 
  } else {
    text.style.color = 'pink';
  }
  colorChanged = !colorChanged;
});