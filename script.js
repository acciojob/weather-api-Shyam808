document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const apiKey = "YOUR_API_KEY_HERE"; // ✅ Replace with real OpenWeatherMap API key
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch weather");
      return response.json();
    })
    .then(data => {
      const weatherMain = data.weather[0].main; // e.g., "Clouds"
      document.getElementById("weatherData").innerText = `Current weather in London: ${weatherMain}`;
    })
    .catch(error => {
      document.getElementById("weatherData").innerText = "Could not fetch weather data.";
      console.error("Error:", error);
    });
});
