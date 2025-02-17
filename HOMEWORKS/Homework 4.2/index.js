const number = prompt('Give me a number', 228);

const digit1 = Math.floor(number / 100);
const digit2 = Math.floor((number % 100) / 10);
const digit3 = number % 10;

if (digit1 === digit2 && digit2 === digit3) {
  alert("Усі цифри однакові.");
} else if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
  alert("Серед цифр є однакові.");
} else {
  alert("Усі цифри різні.");
}