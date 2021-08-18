// reference to some elements
const gBtn = document.querySelector('.g-btn');
const landingContainer = document.querySelector('.w-landing');
const inputContainer = document.querySelector('.w-input');
const descriptionContainer = document.querySelector('.w-description');

// function to display input container
gBtn.onclick = function showNextContainer()
{
    landingContainer.style.display = 'none';
    inputContainer.style.display = 'block';
}

var checkWeatherBtn = document.querySelector('.c-w-btn');
var goBackBtn = document.querySelector('.bk-btn');

checkWeatherBtn.onclick = function displayWeatherPage()
{
    var cityName = document.querySelector('.cityName').value;
    if(cityName == undefined || cityName == ""){
        alert("Make sure you input your city name");
    }else{
    inputContainer.style.display = 'none';
    descriptionContainer.style.display = 'flex';

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=fb76d87eef777c3d39c1628ad382c9b2", function(data){
        console.log(data);
        var Icon ="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    
        var Description = data.weather[0].description;
        $('.weather').append(Description)
    
        var Name = data.name;
        $('.name').append(Name)
    
        var Temperature = data.main.temp;
        $('.temp').append(Temperature)
    
        // append the icon from the weather to the img with class of w-icon
        $('.w-icon').attr("src", Icon);
    }
    );
}
}
goBackBtn.onclick = function goBack()
{
    descriptionContainer.style.display = 'none';
    landingContainer.style.display = 'block';
    document.querySelector('.cityName').value = "";
}
