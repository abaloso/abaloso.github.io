document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '7b76b4e7fff204285ed11d45b50e2d65';
    const lat = 21.1619;
    const lon = -86.8515;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const weatherDisplay = document.getElementById('weather-display');
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not available');
            }
            return response.json();
        })
        .then(data => {
            const temperature = Math.round(data.main.temp);
            const weatherDescription = data.weather[0].description;
            const windSpeed = Math.round(data.wind.speed * 3.6);

            let weatherIcon;
            const weatherCode = data.weather[0].id;

            if (weatherCode >= 200 && weatherCode < 300) {
                weatherIcon = '⛈️';
            } else if (weatherCode >= 300 && weatherCode < 400) {
                weatherIcon = '🌦️';
            } else if (weatherCode >= 400 && weatherCode < 600) {
                weatherIcon = '🌧️';
            } else if (weatherCode >= 600 && weatherCode < 700) {
                weatherIcon = '🌡️';
            } else if (weatherCode >= 700 && weatherCode < 800) {
                weatherIcon = '🌫️';
            } else if (weatherCode === 800) {
                weatherIcon = '☀️';
            } else if (weatherCode > 800 && weatherCode <= 802) {
                weatherIcon = '🌤️';
            } else if (weatherCode > 802) {
                weatherIcon = '☁️';
            } else {
                weatherIcon = '🏝️';
            }

            weatherDisplay.innerHTML = `
                <span>Current conditions: ${temperature}°C ${weatherIcon} Wind ${windSpeed} kph</span>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherDisplay.innerHTML = '<span>Weather data unavailable</span>';
        });
});