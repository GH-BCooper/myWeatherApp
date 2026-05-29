// API Configuration
const apiKey = import.meta.env.VITE_API_KEY;
const apiURL = import.meta.env.VITE_API_URL;

// DOM Element Selection
const searchBox = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-image");

// Weather Data Fetching
async function fetchWeatherData(cityName) {
  const response = await fetch(apiURL + cityName + `&appid=${apiKey}`);

  // Dynamic Date
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.querySelector(".date").innerHTML = formattedDate;

  // Weather Data Fetching
  async function fetchWeatherData(cityName) {
    const response = await fetch(apiURL + cityName + `&appid=${apiKey}`);

    // Error Handling
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather-details").style.display = "none";
    } else {
      var data = await response.json();

      console.log(data);

      // Weather Information Update
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";

      document.querySelector(".real-feel-temp").innerHTML =
        Math.round(data.main.feels_like) + "°C";

      document.querySelector(".city").innerHTML = data.name;

      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

      document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

      // Weather Icon Handling
      if (data.weather[0].main == "Clouds")
        weatherIcon.src = "./assets/images/clouds.png";
      else if (data.weather[0].main == "Clear")
        weatherIcon.src = "./assets/images/clear.png";
      else if (data.weather[0].main == "Rain")
        weatherIcon.src = "./assets/images/rain.png";
      else if (data.weather[0].main == "Drizzle")
        weatherIcon.src = "./assets/images/drizzle.png";
      else if (data.weather[0].main == "Mist")
        weatherIcon.src = "./assets/images/mist.png";
      else if (data.weather[0].main == "Snow")
        weatherIcon.src = "./assets/images/snow.png";

      // Display Management
      document.querySelector(".weather-details").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  }

  // Search Button Event
  searchButton.addEventListener("click", () => {
    fetchWeatherData(searchBox.value);
    searchBox.value = "";
  });

  // Enter Key Event
  searchBox.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      fetchWeatherData(searchBox.value);
      searchBox.value = "";
    }
  });
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-details").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    // Weather Information Update
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    document.querySelector(".real-feel-temp").innerHTML =
      Math.round(data.main.feels_like) + "°C";

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

    // Weather Icon Handling
    if (data.weather[0].main == "Clouds")
      weatherIcon.src = "./assets/images/clouds.png";
    else if (data.weather[0].main == "Clear")
      weatherIcon.src = "./assets/images/clear.png";
    else if (data.weather[0].main == "Rain")
      weatherIcon.src = "./assets/images/rain.png";
    else if (data.weather[0].main == "Drizzle")
      weatherIcon.src = "./assets/images/drizzle.png";
    else if (data.weather[0].main == "Mist")
      weatherIcon.src = "./assets/images/mist.png";
    else if (data.weather[0].main == "Snow")
      weatherIcon.src = "./assets/images/snow.png";

    // Display Management
    document.querySelector(".weather-details").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// Search Button Event
searchButton.addEventListener("click", () => {
  fetchWeatherData(searchBox.value);
  searchBox.value = "";
});

// Enter Key Event
searchBox.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    fetchWeatherData(searchBox.value);
    searchBox.value = "";
  }
});
