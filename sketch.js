
//-----Created with OpenWeatherMap-----//

//apiKey = 5731e7f2d05169da768d85ade6745bc5

let weather;
let width = 1280;
let height = 720;
let SRtimeFormat;
let SStimeFormat;


let CurrentTime;
let ImgDay = new Image();
let ImgNight = new Image();


function preload(){
  createCanvas(width,height);
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

function InfoPane(){
  noStroke();
  fill(0,20,50, 1);
  rect(0,0,400,719,0,15,15,0);
  InfoPaneText();
}

function InfoPaneText(){
  noStroke();
  textSize(50);
  fill(255,255,255,10);
  text("Weather  Results",40,60);
  text("Location: Plymouth",800,60);
  textSize(20)
  text("Weather at a glance: " + weather.main,60, 120);
  text("Sunrise (hh/mm) : " + SRtimeFormat,60,180);
  text("Sunset (hh/mm) : " + SStimeFormat,60,240);
  //text("Sunrise: " + weather.sys.sunrise + " (unix)");
  //text("Sunset: " + weather.sys.sunset + " (unix)");
  text("Temperature: " + weather.main.temp + "°C",60,300);
  //text("Temperature (min): " + weather.main.temp_min + "°C",60,180);
  //text("Temperature (max): " + weather.main.temp_max + "°C",60,240);
  text("Humidity: " + weather.main.humidity,60,360);
  text("Pressure: " + weather.main.pressure,60,420);
  text("Cloudiness: "+ weather.clouds.all + "%",60,480) ;
  text("Rainfall: " + weather.rain,60,540);
  text("Snowfall: " + weather.snow,60,600);
  text("Windspeed: "+ weather.wind.speed*2.3 + " Mph",60,660);

}


function sun(){
   'pow(abs(sin(t*2))*0.6,sin(t*2))*0.6'
}

function moon(){

}

function rain(){

}

function wind(){

}

function snow(){

}

function clouds(){

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


}
