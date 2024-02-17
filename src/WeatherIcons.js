import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiDayRainMix,
  WiNightAltRainMix,
  WiNightAltRain,
  WiNightAltThunderstorm,
  WiDaySnowWind,
  WiNightAltSnowWind,
  WiDayFog,
  WiNightFog,
  WiDayThunderstorm,
} from "weather-icons-react";

export default function WeatherIcon(props) {
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

  if (codeMapping[props.code] === "WiDaySunny") {
    return <WiDaySunny size={75} />;
  }
  if (codeMapping[props.code] === "WiNightClear") {
    return <WiNightClear size={75} />;
  }
  if (codeMapping[props.code] === "WiDayCloudy") {
    return <WiDayCloudy size={75} />;
  }
  if (codeMapping[props.code] === "WiDayCloudy") {
    return <WiDayCloudy size={75} />;
  }
  if (codeMapping[props.code] === "WiCloud") {
    return <WiCloud size={75} />;
  }
  if (codeMapping[props.code] === "WiCloud") {
    return <WiCloud size={75} />;
  }
  if (codeMapping[props.code] === "WiCloudy") {
    return <WiCloudy size={75} />;
  }
  if (codeMapping[props.code] === "WiCloudy") {
    return <WiCloudy size={75} />;
  }
  if (codeMapping[props.code] === "WiDayRainMix") {
    return <WiDayRainMix size={75} />;
  }
  if (codeMapping[props.code] === "WiNightAltRainMix") {
    return <WiNightAltRainMix size={75} />;
  }
  if (codeMapping[props.code] === "WiNightAltRainMix") {
    return <WiNightAltRainMix size={75} />;
  }
  if (codeMapping[props.code] === "WiNightAltRain") {
    return <WiNightAltRain size={75} />;
  }
  if (codeMapping[props.code] === "WiDayThunderstorm") {
    return <WiDayThunderstorm size={75} />;
  }
  if (codeMapping[props.code] === "WiNightAltThunderstorm") {
    return <WiNightAltThunderstorm size={75} />;
  }
  if (codeMapping[props.code] === "WiDaySnowWind") {
    return <WiDaySnowWind size={75} />;
  }
  if (codeMapping[props.code] === "WiNightAltSnowWind") {
    return <WiNightAltSnowWind size={75} />;
  }
  if (codeMapping[props.code] === "WiDayFog") {
    return <WiDayFog size={75} />;
  }
  if (codeMapping[props.code] === "WiNightFog") {
    return <WiNightFog size={75} />;
  }

  return <div></div>;
}
