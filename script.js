const apiKey = "aeeb301d1fbc2b8c425744a09b0a1dba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-container button");

async function getWeather(city){
    const response = await fetch(apiUrl +`&q=${city}`+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})


