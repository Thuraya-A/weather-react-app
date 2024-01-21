import React, { useState } from "react";
import "./CurrentWeather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function CurrentWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherInfo, setWeatherInfo] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setWeatherInfo({
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      cityName: response.data.name,
      icon: "https://openweathermap.org/img/wn/${response.data.weather[0]}d@2x.png",
      description: response.data.weather[0].description,
      precipitation: "N/A",
      date: new Date(response.data.dt * 1000),
    });
    setLoaded(true);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    const apiKey = "281450ec88936f4fa8ee9864682b49a0";

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  let form = (
    <form
      onSubmit={handleSubmit}
      action="Search for city"
      className="row g-3 align-items-center"
      id="search-form"
    >
      <div className="mb-3 col-lg-6 col-md-6 col-sm-12 search-bar">
        <input
          onChange={updateCity}
          type="text"
          className="form-control"
          id="search-input"
          placeholder="Search for city"
        />
      </div>
      <div className="col-lg-auto col-md-auto col-sm-4 form-text go">
        <button type="submit" className="btn btn-primary go-button">
          Go
        </button>
      </div>
      <div className="col-lg-auto col-md-auto col-sm-6 form-text current">
        <button type="submit" className="btn btn-primary go-button">
          Current
        </button>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div className="CurrentWeather">
        {form}
        <WeatherData info={weatherInfo} />
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <div>loading..</div>
      </div>
    );
  }
}
