const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "07a0f06fe5msha6699ec7d64222ep10d5d9jsnf47f0aab5fb6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      //   sunrise.innerHTML = response.sunrise;
      //   sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;
      humidity1.innerHTML = response.humidity;
      temp1.innerHTML = response.temp;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

const places = [
  "Assam",
  "Mizoram",
  "Nagaland",
  "Meghalaya",
  "Arunachal Pradesh",
  "Manipur",
];

for (let i = 0; i < places.length; i++) {
  fetch(url + places[i], options)
    .then((response) => response.json())
    .then((response) => {
      const placesrow = document.getElementById(places[i]);

      // Create new table cells (<td>) for each data point from the "response" object.
      const cloudPctElement = document.createElement("td");
      const feelsLikeElement = document.createElement("td");
      const humidityElement = document.createElement("td");
      const maxTempElement = document.createElement("td");
      const minTempElement = document.createElement("td");
      const tempElement = document.createElement("td");
      const windDegreesElement = document.createElement("td");
      const windSpeedElement = document.createElement("td");

      // Set the innerHTML of each element to the corresponding data from the "response" object.
      cloudPctElement.innerHTML = response.cloud_pct;
      feelsLikeElement.innerHTML = response.feels_like;
      humidityElement.innerHTML = response.humidity;
      maxTempElement.innerHTML = response.max_temp;
      minTempElement.innerHTML = response.min_temp;
      tempElement.innerHTML = response.temp;
      windDegreesElement.innerHTML = response.wind_degrees;
      windSpeedElement.innerHTML = response.wind_speed;

      // Append the new table cells to the "Assam" element (table row with the ID "Assam").
      placesrow.appendChild(cloudPctElement);
      placesrow.appendChild(feelsLikeElement);
      placesrow.appendChild(humidityElement);
      placesrow.appendChild(maxTempElement);
      placesrow.appendChild(minTempElement);
      placesrow.appendChild(tempElement);
      placesrow.appendChild(windDegreesElement);
      placesrow.appendChild(windSpeedElement);

      console.log(response);
    });
}
