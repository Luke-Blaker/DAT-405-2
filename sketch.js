//apiKey = 5731e7f2d05169da768d85ade6745bc5
let weather;
let UserInput;
let width = 1280;
let height = 720;


function preload(){
  createCanvas(width,height);
  background(155,70,155);
  weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Plymouth&units=metric&appid=5731e7f2d05169da768d85ade6745bc5")
}

function setup(){
    console.log(weather);
  console.log("Location: Plymouth" );
  console.log("Sunrise: " + weather.sys.sunrise);
  console.log("Sunset: " + weather.sys.sunset);
  console.log("Temperature: " + weather.main.temp + "°C");
  console.log("Temperature (min): " + weather.main.temp_min + "°C");
  console.log("Temperature (max): " + weather.main.temp_max + "°C");
  console.log("Humidity: " + weather.main.humidity);
  console.log("Pressure: " + weather.main.pressure);
  console.log("Cloudiness: "+ weather.clouds.all + "%") ;
  console.log("Rainfall: " + weather.rain);
  console.log("Snowfall: " + weather.snow);
  console.log("Windspeed: "+ weather.wind.speed*2.23693629 + " Mph");


}

function draw(){
}


function sun(){
   'pow(abs(sin(t*2))*0.6,sin(t*2))*0.6'
}
