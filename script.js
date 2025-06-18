document.getElementById("getWeatherBtn").addEventListener("click", () => {
  // Simulated response for testing
  const city = "London";
  const weather = "Clouds";

  document.getElementById("weatherData").innerText = `Current weather in ${city}: ${weather}`;
});
