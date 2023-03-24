const apiKey = require ('./apiKey.js');

class WeatherClient {
    
    async fetchWeatherData(city) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
        const data = await response.json();
            return {
                name: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description,
            };
    }
};

module.exports = WeatherClient;