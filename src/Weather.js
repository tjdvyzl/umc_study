import React, { useState, useEffect } from "react";
import axios from "axios";
import { weather_api_key } from "./config";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_KEY}

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [searchedCity, setSearchedCity] = useState("");
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${weather_api_key}`
    )
      .then((response) => {
        console.log(response);
        setWeatherData(response);
        console.log(weatherData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchedCity]);

  const searchWeather = (e) => {
    if (e.key === "Enter") setSearchedCity(e.currentTarget.value);
  };

  return (
    <div
      style={{
        margin: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        onKeyDown={(e) => searchWeather(e)}
        style={{ height: "30px", borderRadius: "8px" }}
      />
      {weatherData.data && (
        <div className="showWeatherPanel">
          <div
            className="temperature"
            style={{ border: "1px solid black", width: "300px" }}
          >
            <div>
              <h2>{weatherData.data.name}</h2>
              <h1>
                {Math.round(
                  (parseInt(weatherData.data.main.temp) - 273.15) * 10
                ) / 10}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
