const API_KEY = '4cbe4f6db240899874a2918056398aab';

const getWeatherData = async function getWeatherData(city, units) {
  try {
    const require = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=5&lang=lt&appid=${API_KEY}`
    );
    const response = await require.json();

    return response;
  } catch {
    throw new Error();
  }
};

const getCities = async function getCities(city) {
  try {
    const require = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},LT&limit=1&appid=${API_KEY}`
    );
    const response = await require.json();
    return response;
  } catch {
    throw new Error();
  }
};

export { getWeatherData, getCities };
