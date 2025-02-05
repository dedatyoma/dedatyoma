import './styles.scss';
const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const nameElement = document.querySelector('.name');
const tempElement = document.querySelector('.temp');
const feelsLikeElement = document.querySelector('.feels-like');
const descElement = document.querySelector('.desc');
const humidityElement = document.querySelector('.humidity');
const pressureElement = document.querySelector('.pressure');
const windElement = document.querySelector('.wind');
const dateElement = document.querySelector('.date');
const timeElement = document.querySelector('.time');
const refreshButton = document.querySelector('.refresh');

function updateData() {
  const now = new Date();
  dateElement.textContent = now.toDateString();
  timeElement.textContent = now.toLocaleTimeString(); 
}

function fetchWeather(city) {
  const apiKey = '7f8fec75bd90c73e7d10da91fe09ae22'; 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`) 
    .then(response => response.json())
    .then(data => {
      nameElement.textContent = data.name || 'City not found';
      tempElement.textContent = `Temperature: ${data.main.temp}°C`;
      feelsLikeElement.textContent = `Feels like: ${data.main.feels_like}°C`;
      descElement.textContent = `Condition: ${data.weather[0].description}`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
      pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
      windElement.textContent = `Wind: ${data.wind.speed} km/h`;
    })
    .catch(() => alert('City not found. Please try again.'));
}

button.addEventListener('click', () => {
  const city = inputValue.value.trim(); 
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

refreshButton.addEventListener('click', () => {
  const city = inputValue.value.trim(); 
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

updateData();
setInterval(updateData, 1000);


