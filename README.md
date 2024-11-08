## Project Overview
The **Weather Dashboard Application** is a React-based web app that allows users to search for the current weather and a 5-day forecast for any city. Users can also manage a list of favorite cities, view weather data for them, and toggle between Celsius and Fahrenheit units.

## Features
- **City Search**: Enter a city name to get current weather data and a 5-day forecast.
- **Favorites Management**: Add or remove cities from your list of favorite locations.
- **Weather Display**: View detailed weather information including temperature, humidity, and weather conditions.
- **Unit Toggle**: Switch between Celsius and Fahrenheit for temperature readings.
- **Local Storage**: Remembers the last searched city for easy access on future visits.

## Technologies Used
- **ReactJS**: Frontend framework for building user interfaces.
- **Axios**: For making HTTP requests to the weather API and JSON server.
- **JSON Server**: Used as a mock backend for storing and managing favorite cities.
- **CSS**: Custom styling for a modern, responsive design.
- **OpenWeatherMap API**: Provides weather data.

## Installation
Follow these steps to get the project running on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Dtejas2022/Wather-dashboard
   cd weather-dashboard

Install Dependencies:

bash
Copy code
npm install
Set Up JSON Server:

Ensure db.json exists for the mock backend.
Run the JSON server:
bash
Copy code
npx json-server --watch db.json --port 3001
Run the React Application:

bash
Copy code
npm start
Usage
Search for a City: Use the search bar to enter a city name and get real-time weather data.
Add to Favorites: Click the button next to a city's name to add it to your list of favorite cities.
View Favorites: See weather data for all your favorite cities in the Favorites section.
Toggle Temperature Units: Click the unit toggle button to switch between Celsius and Fahrenheit.
Project Structure
plaintext
Copy code
src/
|-- components/
|   |-- SearchComponent.js
|   |-- WeatherDisplay.js
|   |-- FavoriteComponent.js
|-- App.js
|-- WeatherDashboard.js
|-- WeatherDashboard.css
|-- index.js
API Integration
OpenWeatherMap API: Fetches current weather and forecast data.
Sign up for an API key at OpenWeatherMap.
Future Enhancements
User Authentication: Allow users to create accounts and save their preferences securely.
Weather Alerts: Display weather warnings for extreme conditions.
Historical Data: Provide past weather data for cities.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (feature/your-feature-name).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more information.