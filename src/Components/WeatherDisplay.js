import React from 'react';
import '../WeatherDashboard.css'

const WeatherDisplay = ({ weatherData, forecastData, unit, toggleUnit }) => {
  if (!weatherData || !forecastData) return <p>No weather data available.</p>;

  return (
    <div>
      <h1>{weatherData.name}</h1>
      <p>Temperature: {weatherData.main.temp} °{unit === 'metric' ? 'C' : 'F'}</p>
      <button onClick={toggleUnit}>
        Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>

      <h2>5-Day Forecast</h2>
      <div>
        {forecastData.list.slice(0, 5).map((day, index) => (
          <div key={index}>
            <p>{day.dt_txt}</p>
            <p>{day.main.temp} °{unit === 'metric' ? 'C' : 'F'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
