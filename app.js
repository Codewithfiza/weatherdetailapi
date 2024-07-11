const apiKey = "5487b2e9544ba9407d1f0ee45c32f5f6";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error("error", error);
        document.getElementById("weatherInfo").innerHTML= "failed to fetch weather data";
      });

}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2 class="city-name">${data.name}</h2>
        <p class="weather-detail"><span class="label">Temperature:</span> ${data.main.temp}°C</p>
        <p class="weather-detail"><span class="label">Humidity:</span> ${data.main.humidity}%</p>
        <p class="weather-detail"><span class="label">Weather:</span> ${data.weather[0].description}</p>
    `;
}