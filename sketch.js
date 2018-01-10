
//-----Created with OpenWeatherMap-----//

//apiKey = 5731e7f2d05169da768d85ade6745bc5

let weather;
let width = 1280;
let height = 720;
let SRtimeFormat;
let SStimeFormat;
let canvas;
let ctx;
let CurrentTime;
let ImgDay = new Image();
let ImgNight = new Image();


function preload(){
  createCanvas(width,height);
  background(155,70,155);
  ImgDay = loadImage("https://78.media.tumblr.com/2c083396ce86fa24a8738566e54df66d/tumblr_p2coixXeWp1wcwkz8o1_1280.jpg");
  ImgNight = loadImage("https://78.media.tumblr.com/9f9f4ed7aec4be7db8f2b79c2480606c/tumblr_p2coixXeWp1wcwkz8o2_1280.jpg");
  weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Plymouth&units=metric&appid=5731e7f2d05169da768d85ade6745bc5")
}

function setup(){
  console.log(weather);
  console.log("Location: Plymouth" );
  console.log("Weather at a glance: " + weather.main.id);
  console.log("Sunrise: " + weather.sys.sunrise + " (unix)");
  console.log("Sunset: " + weather.sys.sunset + " (unix)");
  console.log("Temperature: " + weather.main.temp + "°C");
  console.log("Temperature (min): " + weather.main.temp_min + "°C");
  console.log("Temperature (max): " + weather.main.temp_max + "°C");
  console.log("Humidity: " + weather.main.humidity);
  console.log("Pressure: " + weather.main.pressure);
  console.log("Cloudiness: "+ weather.clouds.all + "%") ;
  console.log("Rainfall: " + weather.rain);
  console.log("Snowfall: " + weather.snow);
  console.log("Windspeed: "+ weather.wind.speed*2.369+ " Mph");
  SunTimeConversion();
  DayNightBackground();
}

function SunTimeConversion(){
  let SRtime = new Date(weather.sys.sunrise*1000);
  let SRtimeNewH = "0" + SRtime.getHours();
  let SRtimeNewM = "0" + SRtime.getMinutes();
  SRtimeFormat = SRtimeNewH + ":" + SRtimeNewM.substr(-2);
  //SRtimeFormat = SRtimeFormat.slice(1,6)
  let SStime = new Date(weather.sys.sunset*1000);
  let SStimeNewH = "0" + SStime.getHours();
  let SStimeNewM = "0" + SStime.getMinutes();
  SStimeFormat = SStimeNewH + ":" + SStimeNewM.substr(-2);
  SStimeFormat = SStimeFormat.slice(1,6)
  console.log("Sunrise (hh/mm) : " + SRtimeFormat);
  console.log("Sunset (hh/mm) : " + SStimeFormat);
}

  function DayNightBackground(){
    CurrentTime = new Date().toLocaleTimeString();
    console.log("System time: " +CurrentTime);
    if (CurrentTime >= SRtimeFormat){
      image(ImgDay,0,0);
    }
    if (CurrentTime >= SStimeFormat){
      image(ImgNight,0,0);
    }
  }

function sun(){
   'pow(abs(sin(t*2))*0.6,sin(t*2))*0.6'
}

function rain(){

}

function wind(){

}

function snow(){

}

function clouds(){

}

function InfoPane(){
  fill(51,15);
  noStroke();
  rect(0,0,320,719,0,15,15,0);

}

function draw(){
  InfoPane();
}
