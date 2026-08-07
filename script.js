async function getWeather() {

    const city = document.getElementById("city").value;
    const apiKey = "362e2a6df2a52b81656f156ec32d101b";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === 200) {
        document.getElementById("result").innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        document.getElementById("result").innerHTML = "City not found!";
    }
}