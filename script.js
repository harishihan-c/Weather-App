const apiKey = "aeeb301d1fbc2b8c425744a09b0a1dba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-container button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city){
    const response = await fetch(apiUrl +`&q=${city}`+ `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-container").style.display = "none";
    }
    else{
        console.log(data);

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".weather-container").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    if(data.weather[0].main == "Cloud"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png";
    }

}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})


