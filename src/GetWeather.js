import React, {useState} from 'react';
import SearchLocationInput from "./autoComplete";
import ApiCall from "./apiCall";
var finalCity = "";
const GetWeather = () => {
  const [location, updateLocation] = useState("Manhattan");
  const [temp, updateTemp] = useState("23");
  const [desc, updateDesc] = useState("Cloudy with chance of Meatballs");
  const [iconurl, updateIconurl] = useState("public/defaultLogo.png");

  async function requestWeather(location) {
    document.title = "Weather Today in " + location;
    console.log("WEATHER TODAY IN : ", location)
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&apikey=637e3c2f05207c3a2db1deebc503f4a0";
    fetch(URL)
      .then(response => response.json())
      .then((data) => {
        /*var city = data.name;
        var temp = Math.round(data.main.temp_max);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;*/
        updatesDOM(data);
        finalCity = data.name;
      })
  }

  function updatesDOM(data) {

    console.log("THE OBJECT IS:::::", data);
    updateLocation(data.name);
    updateTemp(Math.round(data.main.temp));
    updateDesc(data.weather[0].description);
    updateIconurl(data.weather[0].icon);

    /*var city = data.name;
    var temp = Math.round(data.main.temp_max);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;*/
    document.title = "Weather Today in " + location;


    var iconUrl = "http://openweathermap.org/img/w/" + iconurl + ".png";

    /*$('#logger').attr('href',iconUrl);
    //con = (HttpURLConnection) ( new URL(IMG_URL + icon +".png")).openConnection();

    $('.city').html(city);
    $('#temp').html(temp);
    $('#desc').html(desc);
    $('#icon').attr('src', iconUrl);
    return 0;*/

  }

  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    console.log("IT GOT THE DATA");
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long)

  }
  function error() {
    console.log("Error fetching data");

  }

  /*
          function error(){
              $('.city').css('font-size','1.5rem');
              $('.city').html("ERROR FETCHING DATA.\nPLEASE ENABLE LOCATION SERVICES\n");
              var newParagraph = document.createElement("p");
              newParagraph.innerHTML = "<h3>\nOr you could use the query based search below.</h3>";
              $('.city').after(newParagraph);
              //alert("ERROR FETCHING DATA.\nPLEASE TRY AGAIN");
          }
          */

  function weather(lat, long) {

    var URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&apikey=637e3c2f05207c3a2db1deebc503f4a0`;
    console.log(URL);
    fetch(URL)
      .then(response => response.json())
      .then((jsonData) => {
        updatesDOM(jsonData)
      })

  }

  function handleClick(){
    
  }

  return(
      <div>
        <form  >
          <label htmlFor={"location"}>
              Temp
            <input id="location"
                   value = {location}
                   placeholder="Enter Location"
                   onChange={e => updateLocation(e.target.value)}
                   />
                   <button > Submit </button>
          </label>
        </form>
    </div>
  )
}

export default GetWeather;






