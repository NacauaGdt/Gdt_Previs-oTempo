/* eslint-disable react/prop-types */
import "./WeatherInfo5days.css";

function WeatherInfo5days({ weather5days }) {
  let dailyForecast = {};

  for (let forecast of weather5days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  return (
    <div className="weather-container">
      <h3>Previsão Para Os Próximos 5 Dias</h3>
      <div className="weather-list">
        {next5DaysForecast.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p className="forecast-day">
              {new Date(forecast.dt * 1000).toLocaleDateString()}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
            />
            <p className="forecast-description">
              {forecast.weather[0].description}
            </p>
            <p>
              {Math.round(forecast.main.temp_min)}°C min /{" "}
              {Math.round(forecast.main.temp_max)}°C max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInfo5days;
