const apiKey = "0448f80b5dcbfdcbc9bb1b27c6c7e553";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-image");

async function fetchWeatherData(cityName) {
    const response = await fetch(apiURL + cityName + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-details").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".real-feel-temp").innerHTML = data.main.feels_like + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") weatherIcon.src = "./assets/images/clouds.png";
        else if(data.weather[0].main == "Clear") weatherIcon.src = "./assets/images/clear.png";
        else if(data.weather[0].main == "Rain") weatherIcon.src = "./assets/images/rain.png";
        else if(data.weather[0].main == "Drizzle") weatherIcon.src = "./assets/images/drizzle.png";
        else if(data.weather[0].main == "Mist") weatherIcon.src = "./assets/images/mist.png";
        else if(data.weather[0].main == "Snow") weatherIcon.src = "./assets/images/snow.png";

        document.querySelector(".weather-details").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchButton.addEventListener("click", () => {
    fetchWeatherData(searchBox.value);
    searchBox.value="";
});

searchBox.addEventListener ("keyup", (event) => {
    if(event.key=="Enter") {
        fetchWeatherData(searchBox.value);
        searchBox.value="";
    }
})

