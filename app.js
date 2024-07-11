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

function displayWeather(data){
   const weather=  document.getElementById("weatherInfo");
   weather.innerHTML = `<h2> Weather in ${data.name}</h2>
   <p> Temperature: ${data.main.temp}°C</p>
   <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>`;
}