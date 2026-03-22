// status-bar.js developed by Bob Tianqi Wei
(function () {
  var statusNode = document.getElementById("sf-status");
  var weatherIconNode = document.getElementById("sf-weather-icon");
  var weatherText = "";

  if (!statusNode) {
    return;
  }

  var formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  var weatherCodes = {
    0: "Clear",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    66: "Freezing rain",
    67: "Freezing rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy showers",
    85: "Snow showers",
    86: "Snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm",
    99: "Thunderstorm"
  };

  function getWeatherIconName(weatherCode, isDay) {
    if (weatherCode === 0 || weatherCode === 1) {
      return isDay ? "clear-day" : "clear-night";
    }

    if (weatherCode === 2) {
      return isDay ? "partly-cloudy-day" : "partly-cloudy-night";
    }

    if (weatherCode === 3) {
      return "overcast";
    }

    if (weatherCode === 45 || weatherCode === 48) {
      return "fog";
    }

    if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
      return "drizzle";
    }

    if (
      weatherCode === 61 ||
      weatherCode === 63 ||
      weatherCode === 65 ||
      weatherCode === 80 ||
      weatherCode === 81 ||
      weatherCode === 82
    ) {
      return "rain";
    }

    if (weatherCode === 66 || weatherCode === 67) {
      return "sleet";
    }

    if (
      weatherCode === 71 ||
      weatherCode === 73 ||
      weatherCode === 75 ||
      weatherCode === 77 ||
      weatherCode === 85 ||
      weatherCode === 86
    ) {
      return "snow";
    }

    if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
      return "thunderstorms";
    }

    return isDay ? "partly-cloudy-day" : "partly-cloudy-night";
  }

  function render() {
    var timeLabel = formatter.format(new Date());
    statusNode.textContent = weatherText ? weatherText + ", " + timeLabel : timeLabel;
  }

  function renderWeather(data) {
    var currentWeather;
    var weatherLabel;
    var roundedTemp;

    if (!data || !data.current_weather) {
      weatherText = "";
      if (weatherIconNode) {
        weatherIconNode.style.display = "none";
      }
      render();
      return;
    }

    currentWeather = data.current_weather;
    weatherLabel = weatherCodes[currentWeather.weathercode] || "Current conditions";
    roundedTemp = Math.round(currentWeather.temperature);
    weatherText = roundedTemp + "F, " + weatherLabel;

    if (weatherIconNode) {
      weatherIconNode.style.display = "";
      weatherIconNode.src =
        "https://cdn.jsdelivr.net/gh/basmilius/weather-icons/production/fill/all/" +
        getWeatherIconName(currentWeather.weathercode, currentWeather.is_day !== 0) +
        ".svg";
      weatherIconNode.alt = weatherLabel;
    }

    render();
  }

  render();
  window.setInterval(render, 30000);

  window
    .fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=-122.4194&current_weather=true&temperature_unit=fahrenheit"
    )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Weather request failed");
      }
      return response.json();
    })
    .then(renderWeather)
    .catch(function () {
      if (weatherIconNode) {
        weatherIconNode.style.display = "none";
      }
      render();
    });
})();
