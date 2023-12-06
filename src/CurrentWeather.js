import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <form
        action="Search for city"
        className="row g-3 align-items-center"
        id="search-form"
      >
        <div className="mb-3 col-lg-6 col-md-6 col-sm-12 search-bar">
          <input
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
      <div className="row ">
        <div className="col-6">
          <div className="date">Monday 10:30 </div>

          <div className="weather-description">Cloudy</div>

          <div className="temperature-on-display">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              className="weather-icon-on-display"
              alt="sunWithPeriodicClouds"
              width="80px"
            />
            <span>
              <span className="main-degree-no">-3</span>
              <span className="units">
                <a href="/" className="celcius">
                  °C
                </a>
                <span> |</span>
                <a href="/" className="fahrenheit">
                  °F
                </a>
              </span>
            </span>
          </div>
        </div>
        <div className="col-6 information">
          <div className="city-name">London</div>
          <ul>
            <li>Humidity: 4%</li>
            <li>Precipitation: 3%</li>
            <li>Wind: 6mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
