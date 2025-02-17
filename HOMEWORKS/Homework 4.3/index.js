const birthYear = prompt('Якого Ви року народженя?');
if (birthYear === null || birthYear.trim() === '') {
  alert('Шкода, що Ви не захотіли ввести свій рік народження.');
} else if (isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) {
  alert('Будь ласка, введіть коректний рік народження.');
} else {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  alert(`Вам ${age} років.`);
}

const city = prompt('В якому місті Ви проживаєте?');
if (city === null || city.trim() === '') {
  alert('Шкода, що Ви не захотіли ввести своє місто проживання.');
} else {
  switch (city.trim()) {
    case 'Київ':
      alert('Ти живеш в столиці України.');
      break;
    case 'Вашингтон':
      alert('Ти живеш в столиці США.');
      break;
    case 'Лондон':
      alert('Ти живеш в столиці Великої Британії.');
      break;
    default:
      alert(`Ти живеш у місті ${city.trim()}.`);
      break;
  }
}
const sport = prompt('Який Ваш улюбленний вид спорту?');
if (sport === null) {
  alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.')
}
  switch(sport){
    case('Футбол'):{
      alert('Круто!Хочеш бути як Леонель Мессі.');
      break;
    }
    case('Бокс'):{
      alert('Круто!Хочеш бути як Майк Тайсон.');
      break;
    }
    case('Шахи'):{
      alert('Круто!Хочеш бути як Магнус Карлсен.');
      break;
    }
  }

