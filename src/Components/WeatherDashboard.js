import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import WeatherDisplay from './WeatherDisplay';
import FavoriteComponent from './FavoriteComponent';
import '../WeatherDashboard.css'

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  useEffect(() => {
    // Load favorites from JSON Server on component mount
    axios.get('http://localhost:5000/favorites')
      .then(response => setFavorites(response.data))
      .catch(error => console.error("Error fetching favorites:", error));
  }, []);

  const fetchWeather = async (city) => {
    const API_KEY = 'e2889676da96fd0c75df0c15b80c915e'; 

    try {
      // Fetch current weather
      const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`);
      setWeatherData(currentWeather.data);

      // Fetch 5-day forecast
      const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`);
      setForecastData(forecast.data);
      
      setCity(city);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const addFavorite = async () => {
    if (favorites.some(fav => fav.name === city)) return; // Prevent duplicates
    const newFavorite = { name: city };

    try {
      await axios.post('http://localhost:5000/favorites', newFavorite);
      setFavorites([...favorites, newFavorite]);
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  const removeFavorite = async (cityName) => {
    const favoriteToRemove = favorites.find(fav => fav.name === cityName);
  
    if (!favoriteToRemove) return;
  
    try {
      await axios.delete(`http://localhost:5000/favorites/${favoriteToRemove.id}`);
      setFavorites(favorites.filter(fav => fav.id !== favoriteToRemove.id));
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'metric' ? 'imperial' : 'metric'));
    fetchWeather(city);
  };

  return (
    <div className="weather-dashboard">
      
      <header className="intro-title">
        <h1>Welcome to the Weather Dashboard</h1>
        <p>Get current weather updates and a 5-day forecast for your city.</p>
      </header>

      <SearchComponent onSearch={fetchWeather} />
      <WeatherDisplay 
        weatherData={weatherData} 
        forecastData={forecastData} 
        unit={unit}
        toggleUnit={toggleUnit}
      />
      <FavoriteComponent 
        favorites={favorites} 
        onSelect={fetchWeather} 
        onAdd={addFavorite} 
        onRemove={removeFavorite}
      />
    </div>
  );
};

export default WeatherDashboard;
