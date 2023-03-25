const apiKey = require('./apiKey.js');
const fetch = require('node-fetch');

class WeatherClient {
  async fetchWeatherData(city) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
        const data = await response.json();
        if (!data) {
            return {};
    }
    return {
        name: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
    };
} catch (error) {
    console.error(error);
    return {};
    }
    }
}

module.exports = WeatherClient;