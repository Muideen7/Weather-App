require('dotenv').config();
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentWeather from './src/components/current-weather/CurrentWeather';
import Forecast from './src/components/forecast/Forecast';
import Search from './src/components/search/Search';
import { WEATHER_API_URL } from './api';
import "./app.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const rapidApiKey = process.env.GEODB_API_KEY;
  const weatherApiKey = process.env.OPENWEATHER_API_KEY;

  useEffect(() => {
    // Fetch user's location
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get(
          "https://wft-geo-db.p.rapidapi.com/v1/geo/ip",
          { headers: { "X-RapidAPI-Key": rapidApiKey } }
        );
        setLocation(`${response.data.latitude},${response.data.longitude}`);
      } catch (error) {
        console.log(error);
        setLocation("default-location"); // Set a default location in case of error
      }
    };

    fetchUserLocation();

    // Fetch weather data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${WEATHER_API_URL}/weather?lat=${location.split(",")[0]}&lon=${location.split(",")[1]}&appid=${weatherApiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h1>{weatherData.name}</h1>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </div>
      ) : location ? (
        <p>Loading weather data...</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default App;
