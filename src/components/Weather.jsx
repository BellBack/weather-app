import React from 'react';
import { useSelector } from 'react-redux';

function Weather(props) {
  const weather = props.weather;
  const image = weather.current && weather.current.condition.icon;
  const text = weather.current && weather.current.condition.text;
  const temp = weather.current && weather.current.temp_c;
  const city = weather.location && weather.location.name;
  const message = useSelector((state) => state.weather.weatherItems);
  return message.error && message.error.code === 1006 ? (
    <div>
      <p className="error">City not found</p>
    </div>
  ) : (
    <div className="weather_box">
      <p className="cityName">{city}</p>
      <p className="temp">Temperature {temp}°</p>
      <div className="weather_info">
        <img width={50} src={image} alt="" />
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Weather;
