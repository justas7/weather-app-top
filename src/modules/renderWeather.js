const weatherDataContainer = document.querySelector('div.weatherData');

const clearChild = function clearChild(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const WeatherData = function WeatherData(data) {
  weatherDataContainer.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="cityName">${data.city}</h2>
    <img id="icon" src="http://openweathermap.org/img/w/${data.icon}.png" alt="Weather icon">
    <div class="clouds"><span>${data.clouds}</span></div>     
    <div class="temp">
    <span>${data.temp[0].tmp}&#176;</span>
    <span>${data.temp[1].tmp}&#176;<span>${data.temp[1].hour}</span></span>
    <span>${data.temp[2].tmp}&#176;<span>${data.temp[2].hour}</span></span>
    <span>${data.temp[3].tmp}&#176;<span>${data.temp[3].hour}</span></span>
    <span>${data.temp[4].tmp}&#176;<span>${data.temp[4].hour}</span></span>    
    </div>
    <div class="feelsLike"><span>Pojūtis:</span> <span>${data.feelsLike}&deg;</span></div>
    <div class="humidity"><span>Dregmė:</span>  <span>${data.humidity}%</span></div>
    <div class="wind"><span>Vėjas:</span>  <span>${data.wind}m/s</span></div>  
    <div class="pressure"><span> Slėgis:</span>  <span>${data.pressure}hPa</span></div>
         `
  );
};

const SearchResults = function SearchResults(data, container) {
  clearChild(container);
  data.forEach((city) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.textContent = `${city.name}`;
    container.appendChild(li);
  });
};

export { clearChild, SearchResults, WeatherData };
