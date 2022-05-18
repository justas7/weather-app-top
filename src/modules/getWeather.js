import * as api from './apis';
import * as render from './renderWeather';
import weatherData from './weatherData';

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.querySelector('ul.searchResults');
const weatherDataContainer = document.querySelector('div.weatherData');

const initialCityData = (async function initialCityData() {
  const data = await api.getWeatherData('Vilnius', 'metric');
  return weatherData(data.list[0], 'Vilnius', data);
})();

const searchCity = async function searchCity() {
  try {
    const { value } = searchInput;
    if (value.length >= 3) {
      const cities = await api.getCities(value);
      if (cities.length !== 0) {
        render.SearchResults(cities, resultsContainer);
      }
    } else if (resultsContainer.firstChild) {
      render.clearChild(resultsContainer);
    }
  } catch {
    throw new Error();
  }
};

const setCityWeather = function setCityWeather(e) {
  const setCity = async function setCity() {
    try {
      const cityName = resultsContainer.firstChild.textContent;
      let data = await api.getWeatherData(cityName, 'metric');
      data = weatherData(data.list[0], cityName, data);
      render.clearChild(resultsContainer);
      searchInput.value = '';
      return data;
    } catch {
      searchInput.value = '';
      render.clearChild(resultsContainer);
      const err = new Error();
      err.message = 'City not found';
      throw err.message;
    }
  };

  setCity(e).then((data) => {
    render.clearChild(weatherDataContainer);
    render.WeatherData(data);
  });
};

const getWeatherObj = function getWeatherObj() {
  initialCityData.then((data) => render.WeatherData(data));
  searchInput.addEventListener('input', searchCity);
  resultsContainer.addEventListener('click', setCityWeather);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      setCityWeather(e);
    }
  });
};

export default getWeatherObj;
