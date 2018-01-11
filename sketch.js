
//-----Created with OpenWeatherMap-----//

//apiKey = 5731e7f2d05169da768d85ade6745bc5

let weather;
let width = 1280;
let height = 720;
let SRtimeFormat;
let SStimeFormat;
let currentWeather;
let temp;
let humidity;
let pressure;
let cloudiness;
let rainfall;
let snowfall;
let windspeed;


let CurrentTime;
let ImgDay = new Image();
let ImgNight = new Image();


function preload(){
  createCanvas(width,height);
  ImgDay = loadImage("https://78.media.tumblr.com/2c083396ce86fa24a8738566e54df66d/tumblr_p2coixXeWp1wcwkz8o1_1280.jpg");
  ImgNight = loadImage("https://78.media.tumblr.com/9f9f4ed7aec4be7db8f2b79c2480606c/tumblr_p2coixXeWp1wcwkz8o2_1280.jpg");
  Cloud = loadImage("https://78.media.tumblr.com/e07d7320cb4303ebac0c0dbe1fec88d1/tumblr_p2etllqQHz1wcwkz8o1_540.png");
  result = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Plymouth&units=metric&appid=5731e7f2d05169da768d85ade6745bc5")

}

function setup(){

  currentWeather = result.weather[0].main;
  temp = result.main.temp;
  humidity = result.main.humidity;
  pressure = result.main.pressure;
  cloudiness = result.clouds.all;
  rainfall = result.rain;
  snowfall =  result.snow;
  windspeed = result.wind.speed*2.3;
  console.log(result);
  console.log("Location: Plymouth" );
  console.log("Weather at a glance: " + currentWeather);
  console.log("Sunrise: " + result.sys.sunrise + " (unix)");
  console.log("Sunset: " + result.sys.sunset + " (unix)");
  console.log("Temperature: " + temp + "°C");
  console.log("Temperature (min): " + result.main.temp_min + "°C");
  console.log("Temperature (max): " + result.main.temp_max + "°C");
  console.log("Humidity: " + humidity);
  console.log("Pressure: " + pressure);
  console.log("Cloudiness: "+ cloudiness + "%") ;
  console.log("Rainfall: " + rainfall);
  console.log("Snowfall: " + snowfall);
  console.log("Windspeed: "+ windspeed+ " Mph");
  SunTimeConversion();
  DayNightBackground();
  console.log(currentWeather);
}

function SunTimeConversion(){
  let SRtime = new Date(result.sys.sunrise*1000);
  let SRtimeNewH = "0" + SRtime.getHours();
  let SRtimeNewM = "0" + SRtime.getMinutes();
  SRtimeFormat = SRtimeNewH + ":" + SRtimeNewM.substr(-2);
  //SRtimeFormat = SRtimeFormat.slice(1,6)
  let SStime = new Date(result.sys.sunset*1000);
  let SStimeNewH = "0" + SStime.getHours();
  let SStimeNewM = "0" + SStime.getMinutes();
  SStimeFormat = SStimeNewH + ":" + SStimeNewM.substr(-2);
  SStimeFormat = SStimeFormat.slice(1,6)
  console.log("Sunrise (hh/mm) : " + SRtimeFormat);
  console.log("Sunset (hh/mm) : " + SStimeFormat);
}

function InfoPane(){
  noStroke();
  fill(0,20,50, 1);
  rect(0,0,500,719,0,15,15,0);
  InfoPaneText();
}

function InfoPaneText(){
  noStroke();
  textSize(50);
  fill(255,255,255,10);
  text("Weather  Results",40,60);
  text("Location: Plymouth",800,60);
  textSize(20)
  text("Weather at a glance: " + currentWeather,60, 120);
  text("Sunrise (hh/mm) : " + SRtimeFormat,60,180);
  text("Sunset (hh/mm) : " + SStimeFormat,60,240);
  //text("Sunrise: " + weather.sys.sunrise + " (unix)");
  //text("Sunset: " + weather.sys.sunset + " (unix)");
  text("Temperature: " + temp + "°C",60,300);
  //text("Temperature (min): " + weather.main.temp_min + "°C",60,180);
  //text("Temperature (max): " + weather.main.temp_max + "°C",60,240);
  text("Humidity: " + humidity,60,360);
  text("Pressure: " + pressure,60,420);
  text("Cloudiness: "+ cloudiness + "%",60,480) ;
  text("Rainfall: " + rainfall,60,540);
  text("Snowfall: " + snowfall,60,600);
  text("Windspeed: "+ windspeed + " Mph",60,660);

}


function sun(){
   'pow(abs(sin(t*2))*0.6,sin(t*2))*0.6'
}

function moon(){

}

function rain(){
    if (currentWeather == "Rain"){
      let drop = "|";
      let dropcount = 0;
      if(dropcount < 1){
        textSize(10);
        textStyle(BOLD);
        fill(0,0,255);
        text(drop,random(500,1280),random(0,720));
        text.lifespan = 255.0;
      }
    }
  }


function wind(){

}

function snow(){
  if (currentWeather == "Snow"){
    let flake = "*";
    let flakecount = 0;
    if(flakecount < 1){
      textSize(10);
      textStyle(BOLD);
      fill(255,255,255);
      text(flake,random(500,1280),random(0,720));
      text.lifespan = 255.0;
    }
  }
}

function clouds(){
  if (currentWeather == "Clouds"){
    image(Cloud,width/2,100)}
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

function draw(){
  InfoPane();
  clouds();
  rain();
  snow();
  }
