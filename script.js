const apiKey = "8234755896msh5d4f2c159dab9d4p12ec24jsnd59ba3ee9f19";
const apiHost = "weather-by-api-ninjas.p.rapidapi.com";

const searchBox = document.querySelector(".text");
const searchBtn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const url = `https://${apiHost}/v1/weather?city=${city}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Update the DOM with weather data
        document.querySelector(".city").innerText = city;
        document.querySelector(".temp").innerText = `${data.temp}°C`;
        document.querySelector(".Humidity").innerText = `${data.humidity}%`;
        document.querySelector(".Wind\\ Speed").innerText = `${data.wind_speed} km/h`;

        // Optionally change icon
        if (data.temp > 30) {
            weatherIcon.src = "images/sun.png";
        } else if (data.temp > 20) {
            weatherIcon.src = "images/cloud.png";
        } else {
            weatherIcon.src = "images/rain.png";
        }

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather for this city. Please check the name and try again.");
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        getWeather(city);
    }
});
