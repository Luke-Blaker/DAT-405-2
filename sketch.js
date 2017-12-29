//apiKey = 5731e7f2d05169da768d85ade6745bc5
let weather;
let UserInput;

function setup(){
  createCanvas(1280,720);
  background(255,0,0);
}
function loading(){
  UserInput = document.getElementById('city');
  console.log(UserInput.value);
  //weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q="+UserInput.value+"&units=metric&appid=5731e7f2d05169da768d85ade6745bc5");
  weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Exeter&units=metric&appid=5731e7f2d05169da768d85ade6745bc5");
  call()
}
function call(){
  console.log(weather.value);
  console.log("Location: " + UserInput.value);
  console.log("Temperature: " + weather.main.temp.value + "°C");
  console.log("Temperature (min): " + weather.main.temp_min + "°C");
  console.log("Temperature (max): " + weather.main.temp_max + "°C");
  console.log("Humidity: " + weather.main.humidity);
  console.log("Pressure: " + weather.main.pressure);
}

function graphics(){

}
