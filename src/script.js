

function searchCity (city) {
//make the api call and update the UI
let apiKey = "f035t400bee0c0215f1147ac3e963o6b";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}



function search (event){
  event.preventDefault();
  let userInput = document.querySelector("#search-form-input");
  let cityInput = document.querySelector("h1");
  cityInput.innerHTML = userInput.value;
  searchCity(userInput.value);
}

function refreshWeather (response){
  let temperature = document.querySelector("#weather-app-temperature");
  temperature.innerHTML = Math.round(response.data.temperature.current);
}


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);