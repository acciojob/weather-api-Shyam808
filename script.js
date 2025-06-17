document.getElementById("getWeatherBtn").addEventListener("click", function () {
  const apiKey = "YOUR_API_KEY_HERE"; // ✅ Replace this with your OpenWeatherMap API key
  const city = "London";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then(data => {
      const weatherCondition = data.weather[0].main;
      document.getElementById("weatherData").innerText = `Current weather in London: ${weatherCondition}`;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("weatherData").innerText = "Could not fetch weather data.";
    });
});
