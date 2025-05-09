let apiKey = "f035t400bee0c0215f1147ac3e963o6b";


function search (event){
  event.preventDefault();
  let userInput = document.querySelector("#search-form-input");
  let cityInput = document.querySelector("h1");
  cityInput.innerHTML = userInput.value;
}




let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);