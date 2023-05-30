import React from 'react';
import './CurrentWeatherCard.css';

const CurrentWeatherCard = ({ temperature, condition }) => {
  return (
    <div className="current-weather-card">
      <h2>Current Weather</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default CurrentWeatherCard;

