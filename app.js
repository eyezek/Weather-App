card = document.getElementById("card");

searchSection = document.getElementById("searchsection");

searchField = document.getElementById("searchfield");

submitButton = document.getElementById("submitsearch");

cityName = document.getElementById("cityname");

detailsDiv = document.getElementById("details");

temperature = document.getElementById("temperature");

feelsLike = document.getElementById("feelslike");

minTemp = document.getElementById("min");

maxTemp = document.getElementById("max");

conditions = document.getElementById("conditions");

windSpeed = document.getElementById("windspeed");

windDeg = document.getElementById("winddeg");

defaultURL =
  "https://api.openweathermap.org/data/2.5/weather?q=***CITYNAMEHERE***&appid=22812178cf9346e1f08ea35b630f1eba&units=imperial";

function backgroundChange() {
  if (conditions.innerHTML === "Clouds") {
    document.body.style.backgroundImage =
      "url('billy-huynh-v9bnfMCyKbg-unsplash.jpg')";
    document.body.style.color = "black";
    card.style.border = "2px solid black";
    searchSection.style.borderBottom = "2px solid black";
    temperature.style.borderBottom = "2px solid black";
    feelsLike.style.borderBottom = "2px solid black";
    minTemp.style.borderBottom = "2px solid black";
    maxTemp.style.borderBottom = "2px solid black";
    conditions.style.borderBottom = "2px solid black";
    windSpeed.style.borderBottom = "2px solid black";
    windDeg.style.borderBottom = "2px solid black";
  } else if (conditions.innerHTML == "Clear") {
    document.body.style.backgroundImage =
      "url('grooveland-designs-zjoydJb17mE-unsplash.jpg')";
    document.body.style.color = "black";
    card.style.border = "2px solid black";
    searchSection.style.borderBottom = "2px solid black";
    temperature.style.borderBottom = "2px solid black";
    feelsLike.style.borderBottom = "2px solid black";
    minTemp.style.borderBottom = "2px solid black";
    maxTemp.style.borderBottom = "2px solid black";
    conditions.style.borderBottom = "2px solid black";
    windSpeed.style.borderBottom = "2px solid black";
    windDeg.style.borderBottom = "2px solid black";
  } else if (conditions.innerHTML == "Rain") {
    document.body.style.backgroundImage =
      "url('noah-silliman-i2J9jnvaAbU-unsplash.jpg')";
    document.body.style.color = "black";
    card.style.border = "2px solid black";
    searchSection.style.borderBottom = "2px solid black";
    temperature.style.borderBottom = "2px solid black";
    feelsLike.style.borderBottom = "2px solid black";
    minTemp.style.borderBottom = "2px solid black";
    maxTemp.style.borderBottom = "2px solid black";
    conditions.style.borderBottom = "2px solid black";
    windSpeed.style.borderBottom = "2px solid black";
    windDeg.style.borderBottom = "2px solid black";
  } else if (conditions.innerHTML == "Snow") {
    document.body.style.backgroundImage =
      "url('dillon-kydd-7o7m1xCEiY8-unsplash.jpg')";
    document.body.style.color = "black";
    card.style.border = "2px solid black";
    searchSection.style.borderBottom = "2px solid black";
    temperature.style.borderBottom = "2px solid black";
    feelsLike.style.borderBottom = "2px solid black";
    minTemp.style.borderBottom = "2px solid black";
    maxTemp.style.borderBottom = "2px solid black";
    conditions.style.borderBottom = "2px solid black";
    windSpeed.style.borderBottom = "2px solid black";
    windDeg.style.borderBottom = "2px solid black";
  }
}

function backgroundReset() {
  document.body.style.backgroundImage = "none";
  document.body.style.color = "white";
  card.style.border = "2px solid white";
  searchSection.style.borderBottom = "2px solid white";
  temperature.style.borderBottom = "2px solid white";
  feelsLike.style.borderBottom = "2px solid white";
  minTemp.style.borderBottom = "2px solid white";
  maxTemp.style.borderBottom = "2px solid white";
  conditions.style.borderBottom = "2px solid white";
  windSpeed.style.borderBottom = "2px solid white";
  windDeg.style.borderBottom = "2px solid white";
}

// Load Bristol Virginia's weather on refresh / open

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Bristol,+Virginia&appid=22812178cf9346e1f08ea35b630f1eba&units=imperial",
  {
    mode: "cors",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    cityName.innerHTML = response.name;
    temperature.innerHTML = response.main.temp;
    feelsLike.innerHTML = response.main.feels_like;
    minTemp.innerHTML = response.main.temp_min;
    maxTemp.innerHTML = response.main.temp_max;
    conditions.innerHTML = response.weather[0].main;
    windSpeed.innerHTML = response.wind.speed;
    windDeg.innerHTML = response.wind.deg;
    backgroundChange();
  });

// Load users city input and fill out fields

document.getElementById("submitsearch").addEventListener("click", function () {
  let search = searchField.value;
  search.split(" ").join("+");
  fetch(defaultURL.slice(0, 50) + search + defaultURL.slice(50), {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      cityName.innerHTML = response.name;
      temperature.innerHTML = response.main.temp;
      feelsLike.innerHTML = response.main.feels_like;
      minTemp.innerHTML = response.main.temp_min;
      maxTemp.innerHTML = response.main.temp_max;
      conditions.innerHTML = response.weather[0].main;
      windSpeed.innerHTML = response.wind.speed;
      windDeg.innerHTML = response.wind.deg;
      backgroundChange();
    })
    .catch(function (error) {
      console.log(error);
      cityName.innerHTML =
        "Sorry, couldnt find that city. You can use zip codes as well!";
      temperature.innerHTML = "";
      feelsLike.innerHTML = "";
      minTemp.innerHTML = "";
      maxTemp.innerHTML = "";
      conditions.innerHTML = "";
      windSpeed.innerHTML = "";
      windDeg.innerHTML = "";
      backgroundReset();
    });
});
