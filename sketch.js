let apiKey = "5731e7f2d05169da768d85ade6745bc5";
let weather;

function loading(){
  let UserInput = document.getElementById('city');
  console.log(UserInput.value);
  let url = "http://api.openweathermap.org/data/2.5/weather?q="+UserInput.value+"&units=metric&appid="+apiKey;
  weather = loadJSON(url);
  call()
}

function setup(){

  createCanvas(1280,720);
  background(255,0,0);
}
function call(){
  console.log(weather);
}
