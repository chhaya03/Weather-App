let apiKey = "5fdb459679593d972087f9e50af8ee6e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let SearchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let city = document.querySelector(".city");
let Temp = document.querySelector(".temp");
let humidity = document.querySelector(".humadity-value");
let wind = document.querySelector(".wind-speed");
let weatherIcon = document.querySelector(".weather-icon");
let weatherDisplay = document.querySelector(".weather");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    //taking cityname from api
    city.innerHTML = data.name;
    Temp.innerHTML = data.main.temp + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Images/clear.png";
    }

    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Images/rain.png";
    }

    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Images/mist.png";
    }

    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "Images/snow.png";
    }
    else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "Images/haze.png";
    }

    else {

        weatherIcon.src = "Images/clear.png";
    }



}

searchBtn.addEventListener("click", () => {

    weatherDisplay.style.display = 'block';
    checkWeather(SearchBox.value);
})