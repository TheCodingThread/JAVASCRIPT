document.addEventListener("DOMContentLoaded", () => {
    const cityIp = document.getElementById("city-input")
    const getWeatherBtn = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const temperatureDisplay = document.getElementById("temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorMsg = document.getElementById("error-msg")

    const API_KEY = "264ff39180947ddd7ed70580d6752ecc"

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityIp.value.trim()
        if(!city) return

        //as we send an API request to the server, it may give an error, so we use try and catch to handle it
        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
        } catch (error) {
            showError();
        }
    })

    async function fetchWeatherData(city){

    }

    function displayWeatherData(weatherData){

    }

    function showError(){
        weatherInfo.classList.add('hidden')
        errorMsg.classList.remove('hidden')
    }
})