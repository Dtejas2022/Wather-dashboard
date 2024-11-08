# Weather Dashboard Application

## Overview
The **Weather Dashboard Application** is a responsive web app built with React that allows users to search for and view the current weather as well as a 5-day forecast for any city. Users can also manage their list of favorite cities, and the app remembers the last searched city for convenience. The dashboard is designed with a clean, professional UI and offers unit toggling between Celsius and Fahrenheit.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage Instructions](#usage-instructions)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Search Functionality**: Enter a city name to get real-time weather information and a 5-day forecast.
- **Favorites Management**: Add or remove cities from a personal list of favorites.
- **Weather Display**: View detailed weather metrics such as temperature, humidity, and conditions.
- **Unit Toggle**: Switch between Celsius and Fahrenheit for temperature display.
- **Persistent Storage**: The app remembers the last searched city using local storage.

## Technologies Used
- **ReactJS**: For building the user interface.
- **Axios**: For making HTTP requests to the OpenWeatherMap API and JSON server.
- **JSON Server**: Used as a mock backend to store and manage favorite cities.
- **CSS**: Custom styling for a modern and visually appealing user experience.
- **OpenWeatherMap API**: To fetch weather data.

## Setup and Installation
To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Dtejas2022/Wather-dashboard
   cd weather-dashboard
   
2. **Install Dependencies: Ensure that Node.js is installed on your system, then run**:
```bash
npm install


3. **Set Up JSON Server: Ensure db.json is created for the mock backend. Start the JSON server with**:
```bash
npm start

##Usage Instructions
Search for a City: Enter a city name in the search bar and press the search button to view the current weather and a 5-day forecast.
Add to Favorites: Click the "Add to Favorites" button to store a city in the favorites list.
View Favorites: Access and manage your list of favorite cities in the Favorites section.
Toggle Temperature Units: Click the "Celsius/Fahrenheit" button to change the temperature display unit.
Persistent Data: The last searched city will be saved and loaded automatically on your next visit.

##Explanation
components/: Contains reusable components such as SearchComponent, WeatherDisplay, and FavoriteComponent.
WeatherDashboard.js: Main component that ties together the search, display, and favorite functionalities.
WeatherDashboard.css: Styles for the entire dashboard.
db.json: JSON file for simulating a backend for favorite cities.

##API Integration
This app uses the OpenWeatherMap API to fetch weather data. Follow these steps to obtain an API key:

Create an account at OpenWeatherMap.
Obtain an API key and replace the placeholder in your React app with your key.

const apiKey = 'e2889676da96fd0c75df0c15b80c915e';