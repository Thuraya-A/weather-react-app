import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiDayRainMix } from "weather-icons-react";
import { WiNightAltRainMix } from "weather-icons-react";
import { WiNightAltRain } from "weather-icons-react";
import { WiNightAltThunderstorm } from "weather-icons-react";
import { WiDaySnowWind } from "weather-icons-react";
import { WiNightAltSnowWind } from "weather-icons-react";
import { WiDayFog } from "weather-icons-react";
import { WiNightFog } from "weather-icons-react";

export default function WeatherData(props) {
  class WeatherIcons extends React.Component() {
    render() {
      const codeMapping = {
        "01d": "WiDaySunny",
        "01n": "WiNightClear",
        "02d": "WiDayCloudy",
        "02n": "WiDayCloudy",
        "03d": "WiCloud",
        "03n": "WiCloud",
        "04d": "WiCloudy",
        "04n": "WiCloudy",
        "09d": "WiDayRainMix",
        "09n": "WiNightAltRainMix",
        "10d": "WiNightAltRainMix",
        "10n": "WiNightAltRain",
        "11d": "WiDayThunderstorm",
        "11n": "WiNightAltThunderstorm",
        "13d": "WiDaySnowWind",
        "13n": "WiNightAltSnowWind",
        "50d": "WiDayFog",
        "50n": "WiNightFog",
      };

      return (
        <div>
          <{codeMapping[props.code]} size={24} color="#000" />
        </div>
      );
    }
  }
}
