const WeatherClient = require('./weatherclient');
const Weather = require('./weather_class');

describe('Weather.', () => {
  it('Loads data for a specific city (Bristol).', async () => {
    const client = new WeatherClient();
    const weather = new Weather(client);
    await weather.load('Bristol');
    const weatherData = await weather.getWeatherData();
    console.log(`Weather data for ${weatherData.name}:`);
    console.log(weatherData);
  });
});
