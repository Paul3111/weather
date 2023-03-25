const WeatherClient = require ('./weatherclient');

class Weather {
    constructor(client) {
        this.client = client;
        this.weatherData = null;
    }
    
    async load(city) {
        this.weatherData = await this.client.fetchWeatherData(city);
      }

    getWeatherData() {
        return new Promise((resolve, reject) => {
            if (this.weatherData) {
              resolve(this.weatherData);
            } else {
              reject(new Error('No weather data available'));
            }
          });
    }
};

module.exports = Weather;