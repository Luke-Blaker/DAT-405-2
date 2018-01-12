
//-----Created with OpenWeatherMap-----//

//apiKey = 5731e7f2d05169da768d85ade6745bc5

//Setting up all necessary global variables
let result;
let width = 1280;
let height = 720;

//These variables are for the unix timestamps,
//once reformatted to a 24hour version
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

//This function loads the OpenWeatherMap JSON and the images required
//which are linked from my course tumblr page; tagged 'weather_visualiser'
function preload(){
  createCanvas(width,height);
  ImgDay = loadImage("https://78.media.tumblr.com/2c083396ce86fa24a8738566e54df66d/tumblr_p2coixXeWp1wcwkz8o1_1280.jpg");
  ImgNight = loadImage("https://78.media.tumblr.com/9f9f4ed7aec4be7db8f2b79c2480606c/tumblr_p2coixXeWp1wcwkz8o2_1280.jpg");
  Cloud = loadImage("https://78.media.tumblr.com/e07d7320cb4303ebac0c0dbe1fec88d1/tumblr_p2etllqQHz1wcwkz8o1_540.png");
  result = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Plymouth&units=metric&appid=5731e7f2d05169da768d85ade6745bc5")
}                                          //Location can be edited ^ h e r e ^ .

//Here, certain results are assigned to the third portion of global
//variables. Then they are printed to the console
function setup(){
  currentWeather = result.weather[0].main; //reads weather id
  temp = result.main.temp;
  humidity = result.main.humidity;
  pressure = result.main.pressure;
  cloudiness = result.clouds.all;
  rainfall = result.rain; //These two are currently not working
  snowfall =  result.snow; // ~~
  windspeed = result.wind.speed*2.3; //Converted from Metric Mps to Imperial Mph
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
  SunTimeConversion(); //calls the function to convert the unix timestamps
  DayNightBackground(); //calls the function which changes the background based on search query's sunrise and sunset times
  }

//This function converts the unix timestamps into a 24 hour version
function SunTimeConversion(){
  let SRtime = new Date(result.sys.sunrise*1000); //Converted from milliseconds to seconds
  let SRtimeNewH = "0" + SRtime.getHours(); //value then used to get the hour of sunrise, assigned to new variable
  let SRtimeNewM = "0" + SRtime.getMinutes(); //same value used to get the minute of sunrise, assigned to new variable
  SRtimeFormat = SRtimeNewH + ":" + SRtimeNewM.substr(-2); //These variables are then added together, and assigned to a new variable for the time of sunrise
  SRtimeFormat = SRtimeFormat.slice(0,6) //This variable is then sliced to ensure only 4 digits.
  let SStime = new Date(result.sys.sunset*1000); //The next lines perform the same actions as previously, but for the time of sunset
  let SStimeNewH = "0" + SStime.getHours();
  let SStimeNewM = "0" + SStime.getMinutes();
  SStimeFormat = SStimeNewH + ":" + SStimeNewM.substr(-2);
  SStimeFormat = SStimeFormat.slice(1,6)
  console.log("Sunrise (hh/mm) : " + SRtimeFormat); //Times are printed in the console
  console.log("Sunset (hh/mm) : " + SStimeFormat);
}

//This function creates medium grey rectangle with the
//right hand vertices rounded at 15 degrees
function InfoPane(){
  noStroke();
  fill(0,20,50, 1);
  rect(0,0,500,719,0,15,15,0);
  InfoPaneText();
}

//With that, this function displays a formatted version of the weather results
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
  text("Temperature: " + temp + "°C",60,300);
  text("Humidity: " + humidity + "%",60,360);
  text("Pressure: " + pressure,60,420);
  text("Cloudiness: "+ cloudiness + "%",60,480) ;
  text("Rainfall: " + rainfall,60,540);
  text("Snowfall: " + snowfall,60,600);
  text("Windspeed: "+ windspeed + " Mph",60,660);
}

//This is the first of the visualisations.
//This function fills the canvas randomly with a blue '|' to simulate rain
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

//This function does the same but instead displays a white '*'
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

//More of a filler visualisation, but this function
//displays a cloud in the centre of the screen
function clouds(){
  if (currentWeather == "Clouds"){
    image(Cloud,width/2,100)}
}

//The following are weathers and conditions that I would like to add soon,
//There are 75 possible weathers provided by OpenWeatherMap
function sun(){

}

function moon(){

}

function wind(){

}

//This function changes the background from day to night
//based on the sunrise and set times and the system time.
function DayNightBackground(){
  CurrentTime = new Date().toLocaleTimeString();
  console.log("System time: " +CurrentTime);
  if (CurrentTime >= SRtimeFormat){
    image(ImgDay,0,0);
  }
  if (CurrentTime >= SStimeFormat || CurrentTime < SRtimeFormat){
    image(ImgNight,0,0);
  }
}

//Draw function to call all uncalled functions
function draw(){
  InfoPane();
  clouds();
  rain();
  snow();
  }
