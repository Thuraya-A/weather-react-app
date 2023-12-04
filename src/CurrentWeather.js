import React from "react";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <form
        action="Search for city"
        class="row g-3 align-items-center"
        id="search-form"
      >
        <div class="mb-3 col-6 search-bar">
          <input
            type="text"
            class="form-control"
            id="search-input"
            placeholder="Search for city"
          />
        </div>
        <div class="col-auto form-text">
          <button type="submit" class="btn btn-primary go-button">
            Go
          </button>
        </div>
        <div class="col-auto form-text">
          <button type="submit" class="btn btn-primary go-button">
            Current
          </button>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <div className="current">Monday 13:40</div>
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
                <a href="o" className="celcius">
                  °C
                </a>{" "}
                |
                <a href="" className="fahrenheit">
                  °F
                </a>
              </span>
            </span>
          </div>
        </div>
        <div className="col-6">
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
