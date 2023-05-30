import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WEATHER_API_KEY } from "./api";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Fetch user's location
    const fetchUserLocation = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setLocation(`${latitude},${longitude}`);
          },
          error => {
            console.log(error.message);
            setLocation('default-location'); // Set a default location in case of error
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserLocation();

    // Fetch weather data
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
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
          <h1>{weatherData.location.name}</h1>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
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
