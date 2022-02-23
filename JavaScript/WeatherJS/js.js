
https: function getWeatherData() {
    const cityName = document.getElementById("cName").value;
    const apiKey = "041d096d50d683d88d7d2e9f8b96ea5f";
    const weatherUrl =
      "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
      cityName +
      "&appid=" +
      apiKey;
    fetch(weatherUrl)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("demo").innerHTML =
          data.name +
          " : " +
          data.main.temp +
          "C" +
          "<br/> feels like :" +
          data.main.feels_like + "C" + "<br/> Humidity : " + data.main.humidity + " <br/> Wind Speed :" + data.wind.speed 
      });
  }