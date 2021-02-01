"use strict";

function getWeather(event) {
  // event.preventDefault();
  const cityName = searchCity.value;
  if (cityName.trim().length === 0) {
    return alert("Please enter a City Name");
  }

  fetch(
    `https:api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f412ebd57ef5e67752528bf13c44da46`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cityData = data;
      updateWeather(cityData);
      console.log(cityData);
    })

    .catch((err) => {
      console.error("Se ha producido un error:", err);
    });
}

searchButton.addEventListener("click", getWeather);

function updateWeather(cityData) {
  weatherCity.textContent = cityData.name;
  weatherDescription.textContent = cityData.weather[0].main;
  weatherTemperature.textContent = cityData.main.temp;
  loadingText.style.display = "none";
  weatherBox.style.display = "block";
}
