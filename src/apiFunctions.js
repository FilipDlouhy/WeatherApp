let cityName;

function getData (){
   cityName= document.querySelector("#cityName").value;
    if(cityName){
        cityName.trim();
    }else{
        console.log("neslonic")
    }
  
}
function getAPIandDisplayIt(){
    fetch(` http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=b19b9f3943e89c6e025fcbf777476da2` )
    .then(response=>response.json())
    .then(data=>{
 
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=hourly,minutely,current&appid=b19b9f3943e89c6e025fcbf777476da2` )
    .then(response=>response.json())
    .then(data=>{
        
        console.log(data)
        console.log(data.daily[0].feels_like.day)
      fillOtherDays(data)
      fillToday(data);
     
    })
    })
}
function fillOtherDays (data){
  let unit = document.querySelector("#unit").innerHTML;
    let daysDiv = document.querySelector(".other-days")
    daysDiv.innerHTML = " ";
    
        for (let i = 1; i <data.daily.length; i++) {

         
         let kelvinMax=  data.daily[i].temp.max;
         let kelvinMin=  data.daily[i].temp.min;
         let celsiusMin = temperatureConverterKelvinToCelsius(kelvinMin);
         let celsiusMax = temperatureConverterKelvinToCelsius(kelvinMax);
     let farenheitMin = temperatureConverterKelvinToFarenHeit(kelvinMin);
     let farenheitMax = temperatureConverterKelvinToFarenHeit(kelvinMax);
     let roundCelsiusMin = Math.round(celsiusMin);
     let roundCelsiusMax = Math.round(celsiusMax);
     let roundFarenheitMin = Math.round(farenheitMin);
     let roundFarenheitMax = Math.round(farenheitMax);
     let dt = data.daily[i].dt;
     let day = new Date(dt*1000);
     let icon = getIcon(data.daily[i].weather[0].main.toString())
 
    let dateString =day.toDateString().slice(0,3) ;// 'Fri Jan 15 2021'
    let dayOfTheWeek = checkDate(dateString);
    let div = document.createElement("div");
    
         div.classList.add("day");
         if(unit === "C"){
          div.innerHTML = `<h1>${dayOfTheWeek}</h1>
          <p>${roundCelsiusMax}°C-${roundCelsiusMin}°C</p>
     
          <i class="fa-solid  ${icon}"></i>`;
         }else if(unit === "F"){
          div.innerHTML = `<h1>${dayOfTheWeek}</h1>
          <p>${roundFarenheitMax}F-${roundFarenheitMin}F</p>
     
          <i class="fa-solid  ${icon}"></i>`;
         }
        
    
      
         daysDiv.appendChild(div);
          }
}


function fillToday(data){
  let unit = document.querySelector("#unit").innerHTML;
    let today = document.querySelector(".today")
    let div = document.createElement("div")
    let kelvinToday=  data.daily[0].temp.day;
    let celsiusToday = temperatureConverterKelvinToCelsius(kelvinToday);
let farenheitToday = temperatureConverterKelvinToFarenHeit(kelvinToday);
let roundCelsiusToday = Math.round(celsiusToday);
let roundFarenheitToday = Math.round(farenheitToday);
let kelvinTodayFeel=  data.daily[0].feels_like.day;
let celsiusTodayFeel = temperatureConverterKelvinToCelsius(kelvinTodayFeel);
let farenheitTodayFeel = temperatureConverterKelvinToFarenHeit(kelvinTodayFeel);
let roundCelsiusTodayFeel = Math.round(celsiusTodayFeel);
let roundFarenheitTodayFeel = Math.round(farenheitTodayFeel);
let windSpeed = data.daily[0].wind_speed;
let humidity = data.daily[0].humidity;
;
today.innerHTML = " ";
if(unit === "C"){
  div.innerHTML = ` <h1> Today in ${cityName} <i class="fa-solid fa-house"></i></h1>
  <p>Temperature <i class="fa-solid fa-temperature-empty"></i>: ${roundCelsiusToday} °C</p>
  <p>Fells like <i class="fa-solid fa-sun"></i>: ${roundCelsiusTodayFeel} °C</p>
  <p>Humidity <i class="fa-solid fa-droplet"></i>:${humidity} %</p>
  <p>Wind <i class="fa-solid fa-wind"></i>: ${windSpeed} km/h</p> `;
  today.appendChild(div);
}else if(unit === "F"){
  div.innerHTML = ` <h1> Today in ${cityName} <i class="fa-solid fa-house"></i></h1>
  <p>Temperature <i class="fa-solid fa-temperature-empty"></i>: ${roundFarenheitToday} F</p>
  <p>Fells like <i class="fa-solid fa-sun"></i>: ${roundFarenheitTodayFeel} F</p>
  <p>Humidity <i class="fa-solid fa-droplet"></i>:${humidity} %</p>
  <p>Wind <i class="fa-solid fa-wind"></i>: ${windSpeed} km/h</p> `;
  today.appendChild(div);
}

}


function checkDate(date){
    if (date === 'Mon') {
        date = 'Monday';
      } else if (date === 'Tue') {
        date = 'Tuesday';
      } else if (date === 'Wed') {
        date = 'Wednesday';
      } else if (date === 'Thu') {
        date = 'Thursday';
      } else if (date === 'Fri') {
        date = 'Friday';
      } else if (date === 'Sat') {
        date = 'Saturday';
      } else if (date === 'Sun') {
        date = 'Sunday';
      }
      return date
}

function temperatureConverterKelvinToFarenHeit(valNum) {
    valNum = parseFloat(valNum);
    let farenheit=((valNum-273.15)*1.8)+32;

    return farenheit
  }
function temperatureConverterKelvinToCelsius(valNum) {
    valNum = parseFloat(valNum);
  let temperature = valNum-273.15;

  return temperature
  }
function getIcon(icon){
    let iconHTML;
    if(icon === "Rain"){
        iconHTML="fa-cloud-showers-heavy";
    }
    else if (icon === "Clouds"){
        iconHTML="fa-cloud";
    }else if(icon === "Clear"){
        iconHTML="fa-sun";
    }else if (icon === "Snow"){
        iconHTML = "fa-snowflake";
    }
    return iconHTML;
}
export{
    getData ,getAPIandDisplayIt
}