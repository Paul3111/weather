const WeatherClient = require ('./weatherclient')

const client = new WeatherClient();

client.fetchWeatherData('London').then((weatherData) => {
    console.log(`Weather data for ${weatherData.name}:`)
    console.log(weatherData);
  });