import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <form
          action="Search for city"
          class="row g-3 align-items-center"
          id="search-form"
        >
          <div class="mb-3 col-8 search-bar">
            <input
              type="text"
              class="form-control"
              id="search-input"
              placeholder="Search for city"
            />
          </div>
          <div class="col-auto form-text">
            <button
              type="submit"
              class="btn btn-primary go-button"
              id="go-button"
            >
              Go
            </button>
          </div>
          <div class="col-auto form-text">
            <button class="btn btn-primary go-button" id="current-button">
              Current
            </button>
          </div>
        </form>

        <div class="row">
          <div class="col-6">
            <div class="current" id="weather-description">
              Sunny
            </div>
            <div>
              Last updated:
              <span class="time" id="weatherUpdateDate">
                Thursday 1:23 PM
              </span>
            </div>

            <div class="temperature-on-display">
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                class="weather-icon-on-display"
                alt=""
                width="80px"
                id="mainWeatherIcon"
              />
              <span>
                <span class="main-degree-no" id="degree-change">
                  27
                </span>
                <span class="units">
                  <a href="o" class="celcius clicked" id="celcius-link">
                    °C
                  </a>
                </span>
              </span>
            </div>
          </div>
          <div class="col-6">
            <div class="city-name">New York</div>
            <ul>
              <li>
                Humidity: <span id="humidity-percentage">32</span>%
              </li>
              <li>
                Wind: <span id="wind-speed">8</span>mph
              </li>
            </ul>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/Thuraya-A/weather-react-app">
          open-source-code{" "}
        </a>
        , by Thuraya Ali
      </footer>

      <script src="sript.js"></script>
    </div>
  );
}
