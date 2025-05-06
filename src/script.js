
function search (event){
event.preventDefault();
let userInput = document.querySelector("#search-form-input");
let cityInput = document.querySelector("h1");
cityInput.innerHTML = userInput.value;
}




let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);