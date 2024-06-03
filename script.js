const apiKey = "1d4d8d9a7c39a3bc6c57173cd49492c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city"),innerHTML = data.name;
    document.querySelector(".temp"),innerHTML = data.main.temp;
    document.querySelector(".humidity"),innerHTML = data.main.humidity;
}