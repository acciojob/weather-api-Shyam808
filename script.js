document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const apiKey = "https://openweathermap.org/find?q=vadodara";
  const city = "Vadodara";
  const url = `https://openweathermap.org/find?q=vadodara`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").innerText = `Current weather in ${city}: ${weather}`;
    })
    .catch(error => {
      document.getElementById("weatherData").innerText = `Error: ${error.message}`;
    });
});
