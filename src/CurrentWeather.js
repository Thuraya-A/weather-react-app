import React from "react";
import "./CurrentWeather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <div className="city-name-sm d-lg-none d-md-none d-sm-block">
            London
          </div>
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
          <div className="city-name ">London</div>
          <ul>
            <li>
              <div className="humidity ">Humidity: 4%</div>
            </li>
            <li>
              <div>
                <svg
                  className="precipitation-icon icon d-lg-none d-md-none d-sm-block"
                  xmlns="http://www.w3.org/2000/svg"
                  height="25"
                  width="24"
                  color="#0D6EFD"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z" />
                </svg>
                <span className="precipitation">precipitation:</span>{" "}
                <span>4%</span>
              </div>
            </li>
            <li>
              <div>
                <svg
                  className="wind-icon icon d-lg-none d-md-none d-sm-block"
                  xmlns="http://www.w3.org/2000/svg"
                  height="25"
                  width="25"
                  viewBox="0 0 512 512"
                >
                  <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
                </svg>
                <span className="wind">wind:</span>
                <span> 6mp</span>
              </div>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
