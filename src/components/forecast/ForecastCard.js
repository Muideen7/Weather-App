import React from 'react';
import './ForecastCard.css';

const ForecastCard = ({ date, temperature, condition }) => {
  return (
    <div className="forecast-card">
      <h3>{date}</h3>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default ForecastCard;

