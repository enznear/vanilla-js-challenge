const weather = document.querySelector("#weather");
// const city = document.querySelector("#weather span:last-child");
const API_KEY = "198e1bc0ee4a1e61a921bff5f9b47e43";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weather.innerText = `${data.name} : ${data.weather[0].main} / ${data.main.temp}°C`
        const wether_icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const icon_image = document.createElement("img");
        icon_image.src = wether_icon;
        weather.appendChild(icon_image);
        // city.innerText = data.name;
        // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);