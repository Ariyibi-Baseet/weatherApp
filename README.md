Weather App : By Ariyibi Baseet
====================================================================================================================

Technologies:
Html5
Css3

Programming language
Javascript

live preview 👇👇👇👇👇👇👇👇👇👇👇👇
https://weather-city-checker-app.netlify.app/


API used check 👇👇👇👇👇👇👇👇👇👇👇
https://home.openweathermap.org
Sign up and consume the Weather Apis

API CALL ( for current weather: as used in this project)
-------------------------------------------------------------------------------------------------------------------------------
create a variable that contain the preferred city name
i.e
var cityName = "Jos";

you can then inject in to the api link as seen below 👇👇👇👇👇👇👇👇

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=fb76d87eef777c3d39c1628ad382c9b2", function(data){
        console.log(data);
        var Icon ="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    
        var Description = data.weather[0].description;
        $('.weather').append(Description)
    
        var Name = data.name;
        $('.name').append(Name)
    
        var Temperature = data.main.temp + "🌡℃";
        $('.temp').append(Temperature)
    
        // append the icon from the weather to the img created in the html file
        $('.w-icon').attr("src", Icon);
    }
    );
-------------------------------------------------------------------------------------------------------------------------------


CREATION DATE : AUGUST 20, 2021
COMPLETION DATE : AUGUST 21, 2021
DEVELOPED BY : ARIYBI BASEET - FRONTEND DEVELOPER | PROBLEM SOLVER

