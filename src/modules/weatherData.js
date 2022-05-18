const firstToUpperCase = function firstToUpperCase(word) {
  return word[0].toUpperCase() + word.slice(1);
};

const weatherData = function weatherData(data, cityName, temps) {
  const { pressure, humidity, feels_like: feelsLike } = data.main;
  const wind = data.wind.speed;
  const clouds = firstToUpperCase(data.weather[0].description);
  const { icon } = data.weather[0];
  const city = firstToUpperCase(cityName);
  const temp = [];
  for (let i = 0; i < 5; i += 1) {
    const tmp = temps.list[i].main.temp;

    const dt = temps.list[i].dt_txt.split(' ')[1];
    const hour = dt.slice(0, 5);

    temp.push({ tmp, hour });
  }

  return {
    temp,
    feelsLike,
    pressure,
    humidity,
    wind,
    clouds,
    icon,
    city,
  };
};

export default weatherData;
