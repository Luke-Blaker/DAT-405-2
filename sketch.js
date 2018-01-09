//apiKey = 5731e7f2d05169da768d85ade6745bc5
let weather;
let UserInput;
let width = 1280;
let height = 720;


function preload(){
  createCanvas(width,height);
  background(155,70,155);
  weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Exeter&units=metric&appid=5731e7f2d05169da768d85ade6745bc5")
  //weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q="+UserInput+"&units=metric&appid=5731e7f2d05169da768d85ade6745bc5");

}

function setup(){
  UserInput = document.getElementById('city')
  console.log(UserInput.value);
  //weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q="+UserInput.value+"&units=metric&appid=5731e7f2d05169da768d85ade6745bc5");
  //weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Exeter&units=metric&appid=5731e7f2d05169da768d85ade6745bc5")
  console.log(weather.value);
  console.log("Location: " + UserInput.value);
  console.log("Temperature: " + weather.main.temp + "°C");
  console.log("Temperature (min): " + weather.main.temp_min + "°C");
  console.log("Temperature (max): " + weather.main.temp_max + "°C");
  console.log("Humidity: " + weather.main.humidity);
  console.log("Pressure: " + weather.main.pressure);
}

function draw(){
}


function sun(){
   'pow(abs(sin(t*2))*0.6,sin(t*2))*0.6'
}
