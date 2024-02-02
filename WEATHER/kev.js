const apikey="{c8efd35d710d6710c4e494652e4d7dba}";
const apiaUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkweather(){
    const response= await fetch(apiaUrl + '&appid=$(apikey)');
    var data= await response.json();

    console.log(data);
    document.querySelector("city").innerHTML = data.name;
    document.querySelector("temp").innerHTML = data.main.temp+"°C";
    document.querySelector("humidity").innerHTML= data.main.humidity +"%";
    document.querySelector("wind").innerHTML= data.wind.speed +" km/h";
}
checkweather()