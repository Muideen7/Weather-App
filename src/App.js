process.env.NODE_OPTIONS = "--openssl-legacy-provider";
import React, { useState, useEffect } from 'react';
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import axios from 'axios';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const WEATHER_API_KEY = "6200fa753e0c0dfad812f704ad34b53a"; // Replace with your actual API key

  useEffect(() => {
    // Fetch weather data
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=your-location`);
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <h1>{weatherData.location.name}</h1>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default App;

