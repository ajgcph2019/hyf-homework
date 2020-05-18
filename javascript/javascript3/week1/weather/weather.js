const name = document.querySelector("#city");
const countryName = document.querySelector(".country");
const temperature = document.querySelector("#temp");
const icon = document.querySelector("#icon");
const desc = document.querySelector(".desc");
const windSpeed = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const sunRise = document.querySelector(".sunRise");
const sunSet = document.querySelector(".sunSet");
const displayCity = document.querySelector(".btn");

const input = document.querySelector("#searchInput");
const currentLocBtn = document.querySelector("#location");

displayCity.addEventListener("click", () => {
  if (input.value === "" || input.value === undefined || input.value === null) {
    name.innerHTML = "Add some city name";
  }
  weatherInformation();
});

currentLocBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeatherForCurrentLocation(lat, long);
  }
  function error() {
    console.log("error");
  }
});

function weatherInformation() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    "&appid=bcd019f0d80640e0e14d9273d6f227d0&units=metric";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showWeatherDetail(data);
      document.querySelector("#searchInput").value = "";
      initMap(data);
    });
}

function showWeatherDetail(data) {
  name.innerHTML = data.name;
  countryName.innerHTML = data.sys.country;
  //	temperature.innerHTML = Math.round(data.main.temp);
  temperature.innerHTML = `${Math.round(data.main.temp)} C`;

  desc.innerHTML = data.weather[0].description;
  iconGot = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconGot}@2x.png`;
  icon.innerHTML = `<img src ="${iconUrl}" alt height = '25%' width = '25%'}>`;
  windSpeed.innerHTML = `Wind Speed: ${Math.floor(data.wind.speed)} m/s`;
  humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
  let newSunrise = new Date(data.sys.sunrise * 1000);
  sunRise.innerHTML = `Sunrise: ${formatTime(newSunrise)}`;
  let newSunset = new Date(data.sys.sunset * 1000);
  sunSet.innerHTML = `Sunset: ${formatTime(newSunset)}`;
}

function formatTime(localTime) {
  return localTime.toLocaleTimeString();
}

function getWeatherForCurrentLocation(lat, long) {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bcd019f0d80640e0e14d9273d6f227d0&units=metric`;
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showWeatherDetail(data);
      initMap(data);
    })
    .catch((err) => {
      const resultDiv = document.querySelector("#searchResult");
      resultDiv.innerHTML =
        "Sorry, something bad happened when retrieving the weather";
    });
}

const initMap = (result) => {
  const lat = result.coord.lat;
  const lng = result.coord.lon;

  const map = new google.maps.Map(document.getElementById("map"), {
    container: "map",
  center: { lat: parseFloat(lat), lng: parseFloat(lng) },
    zoom: 12,
  });
  return result;
};
