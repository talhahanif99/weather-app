let apiKey = "7c0163d5c6d0a13e15a2e71be25e2a23";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

const weatherChecker = async (city) => {
  try {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (res.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      let data = await res.json();
      console.log(data);

      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./images/mist.png";
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  } catch (err) {
    console.log("nahi chala");
  }
};

searchButton.addEventListener("click", () => {
  weatherChecker(searchBox.value);
});
